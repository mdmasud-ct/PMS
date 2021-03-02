using AuthServer.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Mvc;
using AuthServer.Models;
using AuthServer.Infrastructure.Constants;
using System.Threading.Tasks;
using IdentityServer4.Services;
using System.Linq;
using System;
using IdentityServer4.Stores;
using IdentityServer4.Models;
using IdentityServer4.Events;
using AuthServer.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using AuthServer.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;

namespace AuthServer.Controllers
{
    public class AccountController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly IIdentityServerInteractionService _interaction;
        private readonly IAuthenticationSchemeProvider _schemeProvider;
        private readonly IClientStore _clientStore;
        private readonly IEventService _events;
        private readonly IRegistrationRepo _repo;
        public AccountController(SignInManager<AppUser> signInManager, UserManager<AppUser> userManager, IIdentityServerInteractionService interaction, IAuthenticationSchemeProvider schemeProvider, IClientStore clientStore, IEventService events,IRegistrationRepo repo)
        {
            _userManager = userManager;
            _interaction = interaction;
            _schemeProvider = schemeProvider;
            _clientStore = clientStore;
            _events = events;
            _signInManager = signInManager;
            _repo = repo;
        }

        /// <summary>
        /// Entry point into the login workflow
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> Login(string returnUrl)
        {
            // build a model so we know what to show on the login page
            var vm = await BuildLoginViewModelAsync(returnUrl);

            if (vm.IsExternalLoginOnly)
            {
                // we only have one option for logging in and it's an external provider
                return RedirectToAction("Challenge", "External", new { provider = vm.ExternalLoginScheme, returnUrl });
            }

            return View(vm);
        }

        /// <summary>
        /// Handle postback from username/password login
        /// </summary>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginInputModel model, string button)
        {
            // check if we are in the context of an authorization request
            var context = await _interaction.GetAuthorizationContextAsync(model.ReturnUrl);

            // the user clicked the "cancel" button
            if (button != "login")
            {
                if (context != null)
                {
                    // if the user cancels, send a result back into IdentityServer as if they 
                    // denied the consent (even if this client does not require consent).
                    // this will send back an access denied OIDC error response to the client.
                    await _interaction.GrantConsentAsync(context, ConsentResponse.Denied);

                    // we can trust model.ReturnUrl since GetAuthorizationContextAsync returned non-null
                    if (await _clientStore.IsPkceClientAsync(context.ClientId))
                    {
                        // if the client is PKCE then we assume it's native, so this change in how to
                        // return the response is for better UX for the end user.
                        return View("Redirect", new RedirectViewModel { RedirectUrl = model.ReturnUrl });
                    }

                    return Redirect(model.ReturnUrl);
                }
                else
                {
                    // since we don't have a valid context, then we just go back to the home page
                    return Redirect("~/");
                }
            }

            if (ModelState.IsValid)
            {
                // validate username/password
                var user = await _userManager.FindByNameAsync(model.Username);
                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    await _events.RaiseAsync(new UserLoginSuccessEvent(user.UserName, user.Id, user.Name));

                    // only set explicit expiration here if user chooses "remember me". 
                    // otherwise we rely upon expiration configured in cookie middleware.
                    AuthenticationProperties props = null;
                    if (AccountOptions.AllowRememberLogin && model.RememberLogin)
                    {
                        props = new AuthenticationProperties
                        {
                            IsPersistent = true,
                            ExpiresUtc = DateTimeOffset.UtcNow.Add(AccountOptions.RememberMeLoginDuration)
                        };
                    };

                    // issue authentication cookie with subject ID and username
                    await HttpContext.SignInAsync(user.Id, user.UserName, props);

                    if (context != null)
                    {
                        if (await _clientStore.IsPkceClientAsync(context.ClientId))
                        {
                            // if the client is PKCE then we assume it's native, so this change in how to
                            // return the response is for better UX for the end user.
                            return View("Redirect", new RedirectViewModel { RedirectUrl = model.ReturnUrl });
                        }

                        // we can trust model.ReturnUrl since GetAuthorizationContextAsync returned non-null
                        return Redirect(model.ReturnUrl);
                    }

                    // request for a local page
                    if (Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Redirect(model.ReturnUrl);
                    }
                    else if (string.IsNullOrEmpty(model.ReturnUrl))
                    {
                        return Redirect("~/");
                    }
                    else
                    {
                        // user might have clicked on a malicious link - should be logged
                        throw new Exception("invalid return URL");
                    }
                }

                await _events.RaiseAsync(new UserLoginFailureEvent(model.Username, "invalid credentials"));
                ModelState.AddModelError(string.Empty, AccountOptions.InvalidCredentialsErrorMessage);
            }

            // something went wrong, show form with error
            var vm = await BuildLoginViewModelAsync(model);
            return View(vm);
        }


        [HttpPost]
        [Route("api/[controller]")]
        public async Task<IActionResult> Register([FromBody]RegisterRequestViewModel model)
        {
            //var aVal = 0; var blowUp = 1 / aVal;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new AppUser { UserName = model.Email, Name = model.Name, Email = model.Email };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);
            
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("userName", user.UserName));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("name", user.Name));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("email", user.Email));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", Roles.Doctor));

            return Ok(new RegisterResponseViewModel(user));
        }


        public async Task<ResultModel> RegisterAsync([FromBody] RegisterRequestViewModel model)
        {
            //var aVal = 0; var blowUp = 1 / aVal;
            ResultModel res = new ResultModel();
            if (!ModelState.IsValid)
            {
                //return BadRequest(ModelState);
                var errors = ModelState.Values.SelectMany(v => v.Errors).Select(a=>a.Exception).ToList();
                res.Code = 4;
                res.Response = String.Join(',', errors);
                return res;
            }

            var user = new AppUser { UserName = model.Email, Name = model.Name, Email = model.Email };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                //return BadRequest(result.Errors);
                res.Code = 4;
                res.Response = string.Join(',', result.Errors.Select(a => a.Description).ToList());
                return res;
            }
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("userName", user.UserName));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("name", user.Name));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("email", user.Email));
            if (string.IsNullOrEmpty(model.Role))
            {
                await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", Roles.Patient));
            }
            else {
                await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", model.Role.ToLower()));
            }
            res.Code = 1;

            res.Response = user.Id;
            return res;//Ok(new RegisterResponseViewModel(user));
        }

        [HttpPost]
        [Route("api/modify")]
        //public ActionResult ChangePassword(UserModel model) {
        public async Task<IActionResult> ChangePassword([FromBody] UserModel model) {

            var currentuser = await _userManager.FindByNameAsync(model.Email);
            if (currentuser == null) {
                return BadRequest(new Exception("Unable to fetch User Details. Please contact admin"));
            }
            //var user = _signInManager.Context.User;
            //var appUser =  _userManager.GetUserAsync(user);
            var appuse = new AppUser { Name=currentuser.Name, UserName = currentuser.Email };
            var result = await _userManager.ChangePasswordAsync(currentuser, model.OldPassword, model.NewPassword);
            if (!result.Succeeded) return BadRequest(result.Errors);
            return Ok(new RegisterResponseViewModel(appuse));
        }

        [HttpPost]
        [Route("api/patient")]
        public async Task<IActionResult> PatientRegister([FromBody] UsersModel model) {
            try
            {
                ResultModel res = new ResultModel();
                if (model == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else 
                {
                    var req = new RegisterRequestViewModel
                    {
                        Email = model.Email,
                        Name = model.FirstName+" "+model.LastName,
                        Password = model.Password,
                        //Role = null
                    };
                    res = await RegisterAsync(req);
                    if (res.Code == 4)
                    {
                        //return BadRequest(result.Response);
                        return Json(res);
                    }
                    else
                    {
                        model.Id = res.Response;
                        this._repo.AddPatient(model);
                        return Json(res);
                        //return Ok();
                    }
                }
            }
            catch (Exception e) {
                return BadRequest(e);
            }
        }

        [HttpPost]
        //[Authorize]
        [Route("api/doctor")]
        public async Task<IActionResult> DoctorRegister([FromBody] UsersModel model)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (model == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    var req = new RegisterRequestViewModel
                    {
                        Email = model.Email,
                        Name = model.FirstName + " " + model.LastName,
                        Password = "Welcome@123",//model.Password,
                        Role = model.Role
                    };
                    res = await RegisterAsync(req);
                    if (res.Code == 4)
                    {
                        //return BadRequest(result.Response);
                        return Json(res);
                    }
                    else
                    {
                        model.Id = res.Response;
                        if (!string.IsNullOrEmpty(model.Role) && model.Role.ToLower().Equals("doctor"))
                            this._repo.AddDoctor(model);
                        else
                            this._repo.AddNurse(model);
                        return Json(res);
                        //return Ok();
                    }
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        //[Authorize]
        [Route("api/information")]
        public async Task<ActionResult> GetRole([FromBody]UserModel model) {
            var currentuser = await _userManager.FindByNameAsync(model.UserName);
            var appuser = new AppUser { Name = currentuser.Name, UserName = currentuser.Email };
            var claims = await _userManager.GetClaimsAsync(currentuser);
            var role = claims.Where(x=>x.Type.Equals("role")).Select(s=>s.Value).FirstOrDefault();
            return Json(new { role = role });
        }
        [HttpGet]
        public async Task<IActionResult> Logout(string logoutId)
        {
            await _signInManager.SignOutAsync();
            var context = await _interaction.GetLogoutContextAsync(logoutId);
            return Redirect(context.PostLogoutRedirectUri);
        }

        //private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);
        /*****************************************/
        /* helper APIs for the AccountController */
        /*****************************************/
        private async Task<LoginViewModel> BuildLoginViewModelAsync(string returnUrl)
        {
            var context = await _interaction.GetAuthorizationContextAsync(returnUrl);
            if (context?.IdP != null)
            {
                var local = context.IdP == IdentityServer4.IdentityServerConstants.LocalIdentityProvider;

                // this is meant to short circuit the UI and only trigger the one external IdP
                var vm = new LoginViewModel
                {
                    EnableLocalLogin = local,
                    ReturnUrl = returnUrl,
                    Username = context?.LoginHint,
                };

                if (!local)
                {
                    vm.ExternalProviders = new[] { new ExternalProvider { AuthenticationScheme = context.IdP } };
                }

                return vm;
            }

            var schemes = await _schemeProvider.GetAllSchemesAsync();

            var providers = schemes.Where(x => x.DisplayName != null || (x.Name.Equals(AccountOptions.WindowsAuthenticationSchemeName, StringComparison.OrdinalIgnoreCase))
                )
                .Select(x => new ExternalProvider
                {
                    DisplayName = x.DisplayName,
                    AuthenticationScheme = x.Name
                }).ToList();

            var allowLocal = true;
            if (context?.ClientId != null)
            {
                var client = await _clientStore.FindEnabledClientByIdAsync(context.ClientId);
                if (client != null)
                {
                    allowLocal = client.EnableLocalLogin;

                    if (client.IdentityProviderRestrictions != null && client.IdentityProviderRestrictions.Any())
                    {
                        providers = providers.Where(provider => client.IdentityProviderRestrictions.Contains(provider.AuthenticationScheme)).ToList();
                    }
                }
            }

            return new LoginViewModel
            {
                AllowRememberLogin = AccountOptions.AllowRememberLogin,
                EnableLocalLogin = allowLocal && AccountOptions.AllowLocalLogin,
                ReturnUrl = returnUrl,
                Username = context?.LoginHint,
                ExternalProviders = providers.ToArray()
            };
        }

        private async Task<LoginViewModel> BuildLoginViewModelAsync(LoginInputModel model)
        {
            var vm = await BuildLoginViewModelAsync(model.ReturnUrl);
            vm.Username = model.Username;
            vm.RememberLogin = model.RememberLogin;
            return vm;
        }
    }
}
