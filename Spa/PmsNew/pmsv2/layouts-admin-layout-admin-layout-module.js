(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "/iSe":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
  \******************************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTableDirective =
/** @class */
function () {
  function DataTableDirective(el) {
    this.el = el;
    /**
     * The DataTable option you pass to configure your table.
     */

    this.dtOptions = {};
  }

  DataTableDirective.prototype.ngOnInit = function () {
    var _this = this;

    if (this.dtTrigger) {
      this.dtTrigger.subscribe(function () {
        _this.displayTable();
      });
    } else {
      this.displayTable();
    }
  };

  DataTableDirective.prototype.ngOnDestroy = function () {
    if (this.dtTrigger) {
      this.dtTrigger.unsubscribe();
    }

    if (this.dt) {
      this.dt.destroy(true);
    }
  };

  DataTableDirective.prototype.displayTable = function () {
    var _this = this;

    this.dtInstance = new Promise(function (resolve, reject) {
      Promise.resolve(_this.dtOptions).then(function (dtOptions) {
        // Using setTimeout as a "hack" to be "part" of NgZone
        setTimeout(function () {
          // Assign DT properties here
          var options = {
            rowCallback: function rowCallback(row, data, index) {
              if (dtOptions.columns) {
                var columns_1 = dtOptions.columns; // Filter columns with pipe declared

                var colsWithPipe = columns_1.filter(function (x) {
                  return x.ngPipeInstance;
                }); // Iterate

                colsWithPipe.forEach(function (el) {
                  var pipe = el.ngPipeInstance; // find index of column using `data` attr

                  var i = columns_1.findIndex(function (e) {
                    return e.data == el.data;
                  }); // get <td> element which holds data using index

                  var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

                  var rowVal = $(rowFromCol).text();
                  var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

                  $(rowFromCol).text(rowValAfter);
                });
              } // run user specified row callback if provided.


              if (_this.dtOptions.rowCallback) {
                _this.dtOptions.rowCallback(row, data, index);
              }
            }
          }; // merge user's config with ours

          options = Object.assign({}, dtOptions, options);
          _this.dt = $(_this.el.nativeElement).DataTable(options);
          resolve(_this.dt);
        });
      });
    });
  };

  DataTableDirective.ctorParameters = function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }];
  };

  DataTableDirective.propDecorators = {
    dtOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
    }],
    dtTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
    }]
  };

  DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
    return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
  };

  DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DataTableDirective,
    selectors: [["", "datatable", ""]],
    inputs: {
      dtOptions: "dtOptions",
      dtTrigger: "dtTrigger"
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[datatable]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    }, {
      dtOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dtTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
  })();

  return DataTableDirective;
}();



/***/ }),

/***/ "09TZ":
/*!*******************************************************!*\
  !*** ./src/app/admin/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span.asterisk.ng-star-inserted {\r\n    color: red;\r\n    padding-top: 0px;\r\n    /* margin-top: 0; */\r\n    font-style: italic;\r\n    font-size: small;\r\n    margin: auto;\r\n}\r\n.mat-form-field-flex{\r\n    background-color: white !important;\r\n}\r\n.mat-form-field-appearance-fill .mat-form-field-flex {\r\n    background-color: rgba(0,0,0,0)  !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5hc3Rlcmlzay5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogMDsgKi9cclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWZsZXh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKSAgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "3Buq":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>\n");

/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.css */ "C+6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return []; };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./calendar.component.html */ "ooYX");
/* harmony import */ var _calendar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component.css */ "8w3K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        // need for load calendar bundle first
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["Calendar"]; });
        this.calendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]],
            editable: true,
            customButtons: {
                myCustomButton: {
                    text: 'custom!',
                    click: function () {
                        alert('clicked the custom button!');
                    }
                }
            },
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridWeek dayGridMonth'
            },
            dateClick: this.handleDateClick.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventDragStop: this.handleEventDragStop.bind(this)
        };
    };
    CalendarComponent.prototype.handleDateClick = function (arg) {
        console.log(arg);
    };
    CalendarComponent.prototype.handleEventClick = function (arg) {
        console.log(arg);
    };
    CalendarComponent.prototype.handleEventDragStop = function (arg) {
        console.log(arg);
    };
    CalendarComponent.prototype.updateHeader = function () {
        this.calendarOptions.headerToolbar = {
            left: 'prev,next myCustomButton',
            center: 'title',
            right: ''
        };
    };
    CalendarComponent.prototype.updateEvents = function () {
        var nowDate = new Date();
        var yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);
        this.calendarOptions.events = [{
                title: 'Updaten Event',
                start: yearMonth + '-08',
                end: yearMonth + '-10'
            }];
    };
    CalendarComponent.propDecorators = {
        fullcalendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['fullcalendar',] }]
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-calendar',
            template: _raw_loader_calendar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_calendar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA");
/* harmony import */ var _icons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component.css */ "3Buq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-icons',
            template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_icons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "8w3K":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9LZo":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "Nt+r");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css */ "09TZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_registerModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/registerModel */ "vj1h");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/dropdownmaster.service */ "94X0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registersvc, toaster, router, spinner) {
        this.registersvc = registersvc;
        this.toaster = toaster;
        this.router = router;
        this.spinner = spinner;
        this.nursedata = [];
        this.doctordata = [];
        this.msg = "";
        this.fullname = "";
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contactno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            speciality: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    RegisterComponent.prototype.SavePractitionerData = function () {
        var _this = this;
        var operation = "";
        //this.fg.value.role = this.userrole;
        console.log();
        this.fullname = this.fg.value.firstname + ' ' + this.fg.value.lastname;
        this.RegisterUser = new _models_registerModel__WEBPACK_IMPORTED_MODULE_4__["Register"](this.fg.value.title, this.fg.value.firstname, this.fg.value.lastname, this.fg.value.email, this.fg.value.dob, this.fg.value.role, this.fullname, this.fg.value.contactno, this.fg.value.address, this.fg.value.speciality, 'Active', 'No', this.fg.value.id, this.fg.value.gender);
        debugger;
        if (this.nursedata.length > 0 || this.doctordata.length > 0) {
            operation = "PATCH";
            if (this.nursedata.length > 0)
                this.RegisterUser.id = this.nursedata[0].id;
            else
                this.RegisterUser.id = this.doctordata[0].id;
        }
        else {
            operation = "POST";
        }
        if (this.fg.invalid == false) {
            this.spinner.show();
            this.ob = this.registersvc.SaveUserRegiterDatas(this.RegisterUser, operation);
            if (operation == "POST")
                operation = "registered";
            else
                operation = "updated";
            this.ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                _this.spinner.hide();
            })).subscribe(function (data) {
                _this.success = true;
                _this.res = data;
                if (_this.res.code == "1") {
                    _this.success = true;
                    _this.message = _this.res.code;
                    _this.sendMessage();
                    _this.toaster.success("Success", "Saved successfully", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull);
                }
                else {
                    _this.toaster.error("Error", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull);
                }
                //this.toaster.success("Success",data["role"]+" "+data["firstname"]+" "+data["lastname"]+" has "+operation+" successfully.",ToasterPosition.topFull,this.functioncallbackFunction) 
            }, function (error) { return _this.toaster.error("Error", "Error in saving data: " + error, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull); });
        }
    };
    RegisterComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    RegisterComponent.prototype.loadNrData = function (nrId) {
        var _this = this;
        console.log('LoadData' + this.nrId);
        this.obnr = this.registersvc.GetNurseJsonDatasByID(this.nrId);
        this.obnr.subscribe(function (dr) {
            _this.nursedata = dr;
            console.log(_this.nursedata);
            console.log(_this.nursedata[0]);
            _this.fg.patchValue({
                "title": _this.nursedata[0].title,
                "firstname": _this.nursedata[0].firstname,
                "lastname": _this.nursedata[0].lastname,
                "email": _this.nursedata[0].EmailID,
                "contactno": _this.nursedata[0].ContactNo,
                "address": _this.nursedata[0].Address,
                "speciality": _this.nursedata[0].Specialties,
                "dob": _this.nursedata[0].Dob
            });
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    RegisterComponent.prototype.loadDrData = function (drId) {
        var _this = this;
        this.ob = this.registersvc.GetDoctorJsonDatasByID(drId);
        this.ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
            _this.spinner.hide();
        })).subscribe(function (data) {
            _this.UserData = data;
            console.log(_this.UserData);
            _this.fg.patchValue({
                "title": _this.UserData.title,
                "firstname": _this.UserData.firstName,
                "lastname": _this.UserData.lastName,
                "email": _this.UserData.emailId,
                "contactno": _this.UserData.ContactNo,
                "address": _this.UserData.address,
                "speciality": _this.UserData.speciality,
                "dob": _this.UserData.Dob,
                "gender": _this.UserData.gender,
                "id": _this.UserData.id
            });
            //  this.obdr=this.registersvc.GetDoctorJsonDatasByID(this.drId);
            //   this.obdr.subscribe(
            //   (dr:Doctor[])=>{this.doctordata=dr;console.log(this.doctordata)
            //     console.log(this.doctordata[0])
            //   this.fg.patchValue({
            //     "title": this.doctordata[0].title,
            //     "firstname": this.doctordata[0].firstname,
            //     "lastname": this.doctordata[0].lastname,
            //     "email":this.doctordata[0].Email,
            //     "contactno":this.doctordata[0].ContactNo,
            //     "address":this.doctordata[0].Address,
            //     "speciality":this.doctordata[0].Specialties,
            //     "dob":this.doctordata[0].Dob
            //   })
        }, function (error) { return console.log('fails to load nurse data'); });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.userData);
        //console.log(this.nrId+""+this.drId);
        if (this.drId == undefined && this.nrId == undefined) { }
        else if (this.nrId == undefined && this.drId != undefined)
            this.loadDrData(this.drId);
        else if (this.nrId != undefined && this.drId == undefined) {
            this.loadNrData(this.nrId);
        }
        console.log("Role: " + this.userrole);
        var url = this.router.url;
        console.log(url);
        if (url == "/doctor") {
            this.userrole = "Doctor";
            this.fg.patchValue({
                "role": "Doctor"
            });
        }
        else {
            this.userrole = 'Nurse';
            this.fg.patchValue({
                "role": "Nurse"
            });
        }
        this.titles = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__["Title"]);
        this.genders = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__["Genders"]);
    };
    RegisterComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    RegisterComponent.prototype.sendMessage = function () {
        //this.messageEvent.emit(this.message);
        this.parentFun.emit();
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"] }
    ]; };
    RegisterComponent.propDecorators = {
        nrId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        drId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        pRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        userrole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        abc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        userData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        messageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9jT8":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/nurse/nurse.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n<div class=\"divclass\">\n    <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n          <mat-form-field class=\"example-form-field\">\n            <input matInput type=\"text\" [(ngModel)]=\"value\" (keyup)=\"applyFilter()\" placeholder=\"Search here...\">\n          </mat-form-field>\n            </div>\n            <div class=\"col-md-8 text-right\">\n          <button class=\"btn btn-primary btn-outline-primary\"  (click)=\"open(content)\" value=\"Add\"><i class=\"material-icons\">person_add</i><span>&nbsp;&nbsp;Add New</span></button>\n        </div>\n          </div>\n\n      </div>\n  <div class=\"form-group\">\n  <table mat-table [dataSource]=\"dataSourceNurseData\" class=\"mat-elevation-z8\" [ngClass]=\"{'Tableclass': true}\">\n      <ng-container matColumnDef=\"NurseID\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Nurse ID. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.nurseDisplayId}} </td>\n      </ng-container>  \n      <!-- FullName Column -->\n      <ng-container matColumnDef=\"FullName\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Full Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} {{element.lastName}} </td>\n      </ng-container>  \n      <!-- Date_of_Birth Column -->\n      <ng-container matColumnDef=\"Date_of_Birth\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Date of Birth </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.dob | date:'dd-MM-yyyy'}} </td>\n      </ng-container>  \n      <!-- EmailID Column -->\n      <ng-container matColumnDef=\"EmailID\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> EmailID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.emailId}} </td>\n      </ng-container> \n      <!-- ContactNo Column -->\n      <ng-container matColumnDef=\"ContactNo\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> ContactNo </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phoneNo}} </td>\n      </ng-container>  \n      <!-- Address Column -->\n      <ng-container matColumnDef=\"Address\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Address </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n      </ng-container>\n      <!-- Status Column -->\n      <ng-container matColumnDef=\"Status\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.isActive}} </td>\n      </ng-container>\n      <!-- Blocked_Unblocked Column -->\n      <ng-container matColumnDef=\"Blocked_Unblocked\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Locked </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.isLocked}} </td>\n      </ng-container>\n        <!-- View/Edit/Delete Column -->\n       <ng-container matColumnDef=\"View_Edit_Delete\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n            <button class=\"btn\"  (click)=\"Viewopen(Viewcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"View\"><mat-icon>visibility</mat-icon></button>\n            <button class=\"btn\" (click)=\"Editopen(Editcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Edit\"><mat-icon>edit</mat-icon></button>\n            <button class=\"btn\" (click)=\"Deleteopen(Deletecontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Archive\"><mat-icon>delete</mat-icon></button>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <mat-paginator [length]=\"100\"\n  [pageSize]=\"10\"\n  [pageSizeOptions]=\"[5, 10, 25, 100]\" style=\"color: #0047AB; font-size: small;\">\n  </mat-paginator>\n  \n  </div>\n  </div>\n  </div>\n  \n  <div class=\"modalTagReg\">\n    <!-- Register PopUp -->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\" >    \n      <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\n        <div class=\"modal-body\" >\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times; &nbsp;</span>\n        </button>\n        <app-register (parentFun)=\"receiveMessage()\" [userrole]=\"Nurse\"></app-register>\n       </div> \n    </ng-template>\n    <!-- Register PopUp -->\n  \n   <!-- View By ID PopUp -->\n   <ng-template #Viewcontent let-modal>\n    <div class=\"modal-header\" *ngIf=\"UserData\">\n      <!-- <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4> -->\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" *ngFor=\"let item of UserData\">\n      <h1 style=\"text-align: left;\">User id:  {{item.id}} </h1>\n      <!-- <form *ngFor=\"let item of dataSourceDoctorData\" [(ngModel)]=\"dataSourceDoctorData\"> -->\n        <form >    \n          <div class=\"main main-raised\" >\n            <div class=\"profile-content\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 ml-auto mr-auto\">\n                    <div class=\"profile\">\n                      <div class=\"avatar avatar1\" style=\"width: 20%;\">\n                        <img src=\"../../../assets/img/UserProfileIcon.webp\" alt=\"Circle Image\" class=\"img-raised rounded-circle\" [ngClass]=\"{'person_pin': true}\">\n                      </div>\n                      <div class=\"avatar avatart2\" style=\"width: 80%;padding-top:15px\">\n                        <table style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\n                          <tr>\n                            <th style=\"width: 27%;\">Name</th>\n                            <th style=\"width: 73%;\"><h3 class=\"title\">{{item.FullName}}</h3></th>                          \n                          </tr>\n                          </table>\n                      </div>                   \n                    </div>\n                    <div class=\"name\">                      \n                      <!-- <hr/> -->\n                      <table class=\"table table-hover\" style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\n                        <tr>\n                          <td>Date of Birth</td>\n                          <td>{{item.Date_of_Birth}}</td>                          \n                        </tr>\n                        <tr>\n                          <td>Email Id</td>\n                          <td>{{item.EmailID}}</td>\n                        </tr>\n                        <tr>\n                          <td>Phone No.</td>\n                          <td>{{item.ContactNo}}g</td>\n                        </tr>\n                        <tr>\n                          <td>Address</td>\n                          <td>{{item.Address}}</td>\n                        </tr>\n                        <tr>\n                          <td>Status</td>\n                          <td>{{item.Status}}</td>\n                        </tr>                        \n                      </table>                    \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <!-- <button type=\"button\" class=\"btn btn-outline\" (click)=\"modal.close('Save click')\">Save</button> -->\n    </div>\n  </ng-template>\n    <!-- View By ID PopUp -->\n  \n    <!-- Edit By ID PopUp -->  \n    <ng-template #Editcontent let-c=\"close\" let-d=\"dismiss\" >    \n      <!-- <div class=\"modal-body\" [ngClass]=\"{'ModelPopUpClass': true}\"> -->\n        <div class=\"modal-body\" >\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times; &nbsp;</span>\n        </button>\n        <app-register [nrId]=\"NrIdToUpdate\"></app-register>\n       </div> \n    </ng-template>\n    <!-- Edit By ID PopUp -->\n  \n     <!-- Delete By ID PopUp -->  \n    <ng-template #Deletecontent let-modal>\n      <div class=\"modal-header\" *ngIf=\"UserData\">\n        <!-- <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4> -->\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngFor=\"let item of UserData\">\n        <!-- <h1 style=\"text-align: left;\">User id: {{item.id}} is deleted</h1>        -->\n        <!-- <hr> -->\n        <h2>Are you sure you want to delete the user:</h2> <h3>{{item.FullName}}</h3>\n        <!-- <p>If delete click on delete or Cancel</p> -->\n      <!-- </div> -->\n      <!-- <button class=\"btn\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Delete\">Delete</button> -->\n      <div class=\"modal-footer\">\n        <!-- <button class=\"btn\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Delete\">Delete</button> -->\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"SoftDeleteNurseData(item.id)\" title=\"Delete\">Delete</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Save click')\" title=\"Cancel\">Cancel</button>\n      </div>\n    </div>\n    </ng-template>\n    <!-- Delete By ID PopUp -->\n  </div>");

/***/ }),

/***/ "A7+T":
/*!************************************************!*\
  !*** ./src/app/admin/nurse/nurse.component.ts ***!
  \************************************************/
/*! exports provided: NurseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseComponent", function() { return NurseComponent; });
/* harmony import */ var _raw_loader_nurse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nurse.component.html */ "9jT8");
/* harmony import */ var _nurse_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse.component.css */ "d5D1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NurseComponent = /** @class */ (function () {
    // Ng Pop Up Model
    function NurseComponent(config, modalService, registerService, toaster) {
        this.modalService = modalService;
        this.registerService = registerService;
        this.toaster = toaster;
        this.value = '';
        this.NurseData = [];
        this.dataSourceNurseData = [];
        //Ng mat-table columns
        this.displayedColumns = [
            'NurseID',
            'FullName',
            'Date_of_Birth',
            'EmailID',
            'ContactNo',
            'Address',
            'Status',
            'Blocked_Unblocked',
            'View_Edit_Delete'
        ];
        //modals used by this component
        config.backdrop = 'static';
        config.keyboard = false;
    }
    NurseComponent.prototype.Getjson = function () {
        var _this = this;
        this.ob = this.registerService.GetNurseJsonDatas();
        this.ob.subscribe(function (data) {
            console.log(data);
            _this.NurseData = data;
            _this.dataSourceNurseData = data;
        }, function (error) { return _this.toaster.error("Error", "Unable to fetch records", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull); });
        this.dataSourceNurse = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.NurseData);
        console.log("Data Source: " + this.NurseData);
    };
    // View by Id function
    NurseComponent.prototype.GetdataById = function (id) {
        var _this = this;
        this.ob = this.registerService.GetNurseJsonDatasByID(id);
        this.ob.subscribe(function (data) { _this.UserData = data; });
        // console.log("USerdata : "+this.UserData.id);
    };
    // Delete by Id function
    NurseComponent.prototype.DeletedataById = function (id) {
        var _this = this;
        this.ob = this.registerService.DeleteNurseJsonDatasByID(id);
        this.ob.subscribe(function (data) { _this.DeleteUserData = data; });
        console.log("DeleteUserData : " + this.DeleteUserData.id);
    };
    NurseComponent.prototype.applyFilter = function () {
        var _this = this;
        //debugger;
        console.log(this.value);
        if (this.value != '') {
            this.dataSourceNurseData = this.NurseData.filter(function (p) { return p.FullName.includes(_this.value); });
        }
        else {
            this.dataSourceNurseData = this.NurseData;
        }
        console.log(this.NurseData);
    };
    // Ng Pop Up Model
    NurseComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
    };
    NurseComponent.prototype.Viewopen = function (Viewcontent, id) {
        this.modalService.open(Viewcontent, { size: 'md', centered: true, scrollable: false });
        this.GetdataById(id);
    };
    NurseComponent.prototype.Deleteopen = function (Deletecontent, id) {
        this.modalService.open(Deletecontent, { size: 'md', centered: true, scrollable: true });
        this.GetdataById(id);
        // this.DeletedataById(id);
    };
    NurseComponent.prototype.Editopen = function (Editcontent, selectedNrId) {
        this.modalService.open(Editcontent, { size: 'xl', centered: true, scrollable: true });
        this.NrIdToUpdate = selectedNrId;
        // this.GetdataById(id);
    };
    // getToday(): string
    // {
    //    return new Date().toISOString().split('T')[0];
    // }
    NurseComponent.prototype.ngOnInit = function () {
        this.Getjson();
    };
    NurseComponent.prototype.SoftDeleteNurseData = function (nurseId) {
        var _this = this;
        //debugger;
        this.modalService.dismissAll();
        console.log("ts.SoftDeletePatientData() hits");
        console.log(nurseId);
        var obj = {};
        obj.id = nurseId,
            obj.Status = "InActive";
        this.ob = this.registerService.SoftDeleteNurseData(obj);
        this.ob.subscribe(function (dataa) {
            console.log(dataa);
            if (dataa != null) {
                _this.success = true;
                _this.toaster.success("Success", "Nurse with Id: " + nurseId + " Deleted.", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].topFull, _this.functioncallbackFunction);
            }
        }, function (error) { return console.log("Error in deleting nurse data"); });
    };
    NurseComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    NurseComponent.prototype.receiveMessage = function ($event) {
        this.Getjson();
    };
    NurseComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
    ]; };
    NurseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nurse',
            template: _raw_loader_nurse_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]],
            styles: [_nurse_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], NurseComponent);
    return NurseComponent;
}());



/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Dh3D":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
  \**********************************************************************/
/*! exports provided: MAT_SORT_DEFAULT_OPTIONS, MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_DEFAULT_OPTIONS", function() { return MAT_SORT_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return MAT_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return MatSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return MatSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return MatSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return MatSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return matSortAnimations; });
/* harmony import */ var C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */




var _c0 = ["mat-sort-header", ""];

function MatSortHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r1._disableViewStateAnimation = true;
    })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r3._disableViewStateAnimation = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
  }
}

var _c1 = ["*"];

function getSortDuplicateSortableIdError(id) {
  return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
}
/** @docs-private */


function getSortHeaderNotContainedWithinSortError() {
  return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
}
/** @docs-private */


function getSortHeaderMissingIdError() {
  return Error("MatSortHeader must be provided with a unique id.");
}
/** @docs-private */


function getSortInvalidDirectionError(direction) {
  return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-sort`. */


var MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_SORT_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatSort.

/** @docs-private */

var MatSortBase = function MatSortBase() {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSortBase);
};

var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatSortBase));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */


var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatSort, _MatSortMixinBase2);

  var _super = Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatSort);

  function MatSort(_defaultOptions) {
    var _this;

    Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSort);

    _this = _super.call(this);
    _this._defaultOptions = _defaultOptions;
    /** Collection of all registered sortables that this directive manages. */

    _this.sortables = new Map();
    /** Used to notify any child components listening to state changes. */

    _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overriden by the MatSortable's sort start.
     */

    _this.start = 'asc';
    _this._direction = '';
    /** Event emitted when the user changes either the active sort or sort direction. */

    _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    return _this;
  }
  /** The sort direction of the currently active MatSortable. */


  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatSort, [{
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(direction) {
      if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortInvalidDirectionError(direction);
      }

      this._direction = direction;
    }
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     * May be overriden by the MatSortable's disable clear input.
     */

  }, {
    key: "disableClear",
    get: function get() {
      return this._disableClear;
    },
    set: function set(v) {
      this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(v);
    }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */

  }, {
    key: "register",
    value: function register(sortable) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!sortable.id) {
          throw getSortHeaderMissingIdError();
        }

        if (this.sortables.has(sortable.id)) {
          throw getSortDuplicateSortableIdError(sortable.id);
        }
      }

      this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */

  }, {
    key: "deregister",
    value: function deregister(sortable) {
      this.sortables.delete(sortable.id);
    }
    /** Sets the active sort id and determines the new sort direction. */

  }, {
    key: "sort",
    value: function sort(sortable) {
      if (this.active != sortable.id) {
        this.active = sortable.id;
        this.direction = sortable.start ? sortable.start : this.start;
      } else {
        this.direction = this.getNextSortDirection(sortable);
      }

      this.sortChange.emit({
        active: this.active,
        direction: this.direction
      });
    }
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */

  }, {
    key: "getNextSortDirection",
    value: function getNextSortDirection(sortable) {
      var _a, _b, _c;

      if (!sortable) {
        return '';
      } // Get the sort direction cycle with the potential sortable overrides.


      var disableClear = (_b = (_a = sortable === null || sortable === void 0 ? void 0 : sortable.disableClear) !== null && _a !== void 0 ? _a : this.disableClear) !== null && _b !== void 0 ? _b : !!((_c = this._defaultOptions) === null || _c === void 0 ? void 0 : _c.disableClear);
      var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

      var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

      if (nextDirectionIndex >= sortDirectionCycle.length) {
        nextDirectionIndex = 0;
      }

      return sortDirectionCycle[nextDirectionIndex];
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._markInitialized();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._stateChanges.next();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
  }]);

  return MatSort;
}(_MatSortMixinBase);

MatSort.ɵfac = function MatSort_Factory(t) {
  return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};

MatSort.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: MatSort,
  selectors: [["", "matSort", ""]],
  hostAttrs: [1, "mat-sort"],
  inputs: {
    disabled: ["matSortDisabled", "disabled"],
    start: ["matSortStart", "start"],
    direction: ["matSortDirection", "direction"],
    disableClear: ["matSortDisableClear", "disableClear"],
    active: ["matSortActive", "active"]
  },
  outputs: {
    sortChange: "matSortChange"
  },
  exportAs: ["matSort"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
});

MatSort.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }];
};

MatSort.propDecorators = {
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matSortActive']
  }],
  start: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matSortStart']
  }],
  direction: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matSortDirection']
  }],
  disableClear: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['matSortDisableClear']
  }],
  sortChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
    args: ['matSortChange']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSort, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
    args: [{
      selector: '[matSort]',
      exportAs: 'matSort',
      host: {
        'class': 'mat-sort'
      },
      inputs: ['disabled: matSortDisabled']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matSortStart']
    }],
    sortChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
      args: ['matSortChange']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matSortDirection']
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matSortDisableClear']
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['matSortActive']
    }]
  });
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */


function getSortDirectionCycle(start, disableClear) {
  var sortOrder = ['asc', 'desc'];

  if (start == 'desc') {
    sortOrder.reverse();
  }

  if (!disableClear) {
    sortOrder.push('');
  }

  return sortOrder;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["AnimationCurves"].STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */

var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0px)'
  })), // 10px is the height of the sort indicator, minus the width of the pointers
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(10px)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'rotate(-45deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'rotate(45deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION))]),

  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'rotate(45deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'rotate(-45deg)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION))]),

  /** Animation that controls the arrow opacity. */
  arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    opacity: 1
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    opacity: .54
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    opacity: 0
  })), // Transition between all states except for immediate transitions
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION))]),

  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(-25%)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Below
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(25%)'
  })]))), // Hidden Below => Hint Center
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(25%)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0)'
  })]))), // Hint Center => Hidden Above
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(-25%)'
  })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(0)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(-25%)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
    transform: 'translateY(25%)'
  }))]),

  /** Necessary trigger that calls animate on children animations. */
  allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animateChild"])(), {
    optional: true
  })])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */

var MatSortHeaderIntl = function MatSortHeaderIntl() {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSortHeaderIntl);

  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
  /**
   * ARIA label for the sorting button.
   * @deprecated Not used anymore. To be removed.
   * @breaking-change 8.0.0
   */

  this.sortButtonLabel = function (id) {
    return "Change sorting for ".concat(id);
  };
};

MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
  return new (t || MatSortHeaderIntl)();
};

MatSortHeaderIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function MatSortHeaderIntl_Factory() {
    return new MatSortHeaderIntl();
  },
  token: MatSortHeaderIntl,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/** @docs-private */


function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */


var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to the sort header.

/** @docs-private */

var MatSortHeaderBase = function MatSortHeaderBase() {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSortHeaderBase);
};

var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */


var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatSortHeader, _MatSortHeaderMixinBa);

  var _super2 = Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatSortHeader);

  function MatSortHeader(_intl, _changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
  // tslint:disable-next-line: lightweight-tokens
  _sort, _columnDef, _focusMonitor, _elementRef) {
    var _this2;

    Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSortHeader);

    // Note that we use a string token for the `_columnDef`, because the value is provided both by
    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
    // and we want to avoid having the sort header depending on the CDK table because
    // of this single reference.
    _this2 = _super2.call(this);
    _this2._intl = _intl;
    _this2._changeDetectorRef = _changeDetectorRef;
    _this2._sort = _sort;
    _this2._columnDef = _columnDef;
    _this2._focusMonitor = _focusMonitor;
    _this2._elementRef = _elementRef;
    /**
     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
     * provide an affordance that the header is sortable by showing on focus and hover.
     */

    _this2._showIndicatorHint = false;
    /** The direction the arrow should be facing according to the current state. */

    _this2._arrowDirection = '';
    /**
     * Whether the view state animation should show the transition between the `from` and `to` states.
     */

    _this2._disableViewStateAnimation = false;
    /** Sets the position of the arrow that displays when sorted. */

    _this2.arrowPosition = 'after';

    if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }

    _this2._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(function () {
      if (_this2._isSorted()) {
        _this2._updateArrowDirection();
      } // If this header was recently active and now no longer sorted, animate away the arrow.


      if (!_this2._isSorted() && _this2._viewState && _this2._viewState.toState === 'active') {
        _this2._disableViewStateAnimation = false;

        _this2._setAnimationTransitionState({
          fromState: 'active',
          toState: _this2._arrowDirection
        });
      }

      _changeDetectorRef.markForCheck();
    });
    return _this2;
  }
  /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatSortHeader, [{
    key: "disableClear",
    get: function get() {
      return this._disableClear;
    },
    set: function set(v) {
      this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(v);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.id && this._columnDef) {
        this.id = this._columnDef.name;
      } // Initialize the direction of the arrow and set the view state to be immediately that state.


      this._updateArrowDirection();

      this._setAnimationTransitionState({
        toState: this._isSorted() ? 'active' : this._arrowDirection
      });

      this._sort.register(this);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      // We use the focus monitor because we also want to style
      // things differently based on the focus origin.
      this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
        var newState = !!origin;

        if (newState !== _this3._showIndicatorHint) {
          _this3._setIndicatorHintVisible(newState);

          _this3._changeDetectorRef.markForCheck();
        }
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);

      this._sort.deregister(this);

      this._rerenderSubscription.unsubscribe();
    }
    /**
     * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
     * user showing what the active sort will become. If set to false, the arrow will fade away.
     */

  }, {
    key: "_setIndicatorHintVisible",
    value: function _setIndicatorHintVisible(visible) {
      // No-op if the sort header is disabled - should not make the hint visible.
      if (this._isDisabled() && visible) {
        return;
      }

      this._showIndicatorHint = visible;

      if (!this._isSorted()) {
        this._updateArrowDirection();

        if (this._showIndicatorHint) {
          this._setAnimationTransitionState({
            fromState: this._arrowDirection,
            toState: 'hint'
          });
        } else {
          this._setAnimationTransitionState({
            fromState: 'hint',
            toState: this._arrowDirection
          });
        }
      }
    }
    /**
     * Sets the animation transition view state for the arrow's position and opacity. If the
     * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
     * no animation appears.
     */

  }, {
    key: "_setAnimationTransitionState",
    value: function _setAnimationTransitionState(viewState) {
      this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
      // remove the fromState so that it jumps right to the toState.

      if (this._disableViewStateAnimation) {
        this._viewState = {
          toState: viewState.toState
        };
      }
    }
    /** Triggers the sort on this sort header and removes the indicator hint. */

  }, {
    key: "_toggleOnInteraction",
    value: function _toggleOnInteraction() {
      this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


      if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
        this._disableViewStateAnimation = true;
      } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
      // the direction it is facing.


      var viewState = this._isSorted() ? {
        fromState: this._arrowDirection,
        toState: 'active'
      } : {
        fromState: 'active',
        toState: this._arrowDirection
      };

      this._setAnimationTransitionState(viewState);

      this._showIndicatorHint = false;
    }
  }, {
    key: "_handleClick",
    value: function _handleClick() {
      if (!this._isDisabled()) {
        this._toggleOnInteraction();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"])) {
        event.preventDefault();

        this._toggleOnInteraction();
      }
    }
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

  }, {
    key: "_isSorted",
    value: function _isSorted() {
      return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    }
    /** Returns the animation state for the arrow direction (indicator and pointers). */

  }, {
    key: "_getArrowDirectionState",
    value: function _getArrowDirectionState() {
      return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
    }
    /** Returns the arrow position state (opacity, translation). */

  }, {
    key: "_getArrowViewState",
    value: function _getArrowViewState() {
      var fromState = this._viewState.fromState;
      return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
    }
    /**
     * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
     * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
     * active sorted direction. The reason this is updated through a function is because the direction
     * should only be changed at specific times - when deactivated but the hint is displayed and when
     * the sort is active and the direction changes. Otherwise the arrow's direction should linger
     * in cases such as the sort becoming deactivated but we want to animate the arrow away while
     * preserving its direction, even though the next sort direction is actually different and should
     * only be changed once the arrow displays again (hint or activation).
     */

  }, {
    key: "_updateArrowDirection",
    value: function _updateArrowDirection() {
      this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled() {
      return this._sort.disabled || this.disabled;
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */

  }, {
    key: "_getAriaSortAttribute",
    value: function _getAriaSortAttribute() {
      if (!this._isSorted()) {
        return 'none';
      }

      return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    }
    /** Whether the arrow inside the sort header should be rendered. */

  }, {
    key: "_renderArrow",
    value: function _renderArrow() {
      return !this._isDisabled() || this._isSorted();
    }
  }]);

  return MatSortHeader;
}(_MatSortHeaderMixinBase);

MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
  return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
};

MatSortHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MatSortHeader,
  selectors: [["", "mat-sort-header", ""]],
  hostAttrs: [1, "mat-sort-header"],
  hostVars: 3,
  hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
        return ctx._handleClick();
      })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(true);
      })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(false);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
    }
  },
  inputs: {
    disabled: "disabled",
    arrowPosition: "arrowPosition",
    disableClear: "disableClear",
    id: ["mat-sort-header", "id"],
    start: "start"
  },
  exportAs: ["matSortHeader"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 6,
  consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
  template: function MatSortHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._renderArrow());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
  styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
  encapsulation: 2,
  data: {
    animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
  },
  changeDetection: 0
});

MatSortHeader.ctorParameters = function () {
  return [{
    type: MatSortHeaderIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: MatSort,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: ['MAT_SORT_HEADER_COLUMN_DEF']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
  }];
};

MatSortHeader.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
    args: ['mat-sort-header']
  }],
  arrowPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  start: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  disableClear: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSortHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: '[mat-sort-header]',
      exportAs: 'matSortHeader',
      template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
      host: {
        'class': 'mat-sort-header',
        '(click)': '_handleClick()',
        '(keydown)': '_handleKeydown($event)',
        '(mouseenter)': '_setIndicatorHintVisible(true)',
        '(mouseleave)': '_setIndicatorHintVisible(false)',
        '[attr.aria-sort]': '_getAriaSortAttribute()',
        '[class.mat-sort-header-disabled]': '_isDisabled()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      inputs: ['disabled'],
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
    }]
  }], function () {
    return [{
      type: MatSortHeaderIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: MatSort,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: ['MAT_SORT_HEADER_COLUMN_DEF']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
    }];
  }, {
    arrowPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
      args: ['mat-sort-header']
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSortModule = function MatSortModule() {
  Object(C_Masud_IMPACT_PMSFINAL_src_Spa_PmsNew_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSortModule);
};

MatSortModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MatSortModule
});
MatSortModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function MatSortModule_Factory(t) {
    return new (t || MatSortModule)();
  },
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatSortModule, {
    declarations: function declarations() {
      return [MatSort, MatSortHeader];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatSort, MatSortHeader];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSortModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      exports: [MatSort, MatSortHeader],
      declarations: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Full Notification\n                  <!-- <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a> -->\n\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <h4 class=\"card-title\">Notifications</h4>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                        <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                            <i class=\"material-icons\">close</i>\n                        </button>\n                        <span data-notify=\"message\">03/03/2121: Dr. Rona approved your appoinment.</span>\n                    </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                        <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                            <i class=\"material-icons\">close</i>\n                        </button>\n                        <span data-notify=\"message\">02/03/2121: Dr. Philip approved your appoinment.</span>\n                    </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">02/02/2121: Dr. Philip approved your appoinment.</span>\n                      </div>\n                      <div class=\"alert alert-danger alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">02/01/2121: Dr. Philip cancelled your appoinment. Due to emergency surgery.</span>\n                      </div>\n                  </div>\n                  <!-- <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div> -->\n              </div>\n          </div>\n          <!-- <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div> -->\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Gsv1":
/*!**************************************************!*\
  !*** ./src/app/admin/doctor/doctor.component.ts ***!
  \**************************************************/
/*! exports provided: DoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorComponent", function() { return DoctorComponent; });
/* harmony import */ var _raw_loader_doctor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./doctor.component.html */ "VUUB");
/* harmony import */ var _doctor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor.component.css */ "Vbv9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as data from '../../../assets/jsonData/AllUserdata.json';












var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(config, modalService, registerService, toaster, router, spinner, renderer, conf, http) {
        this.modalService = modalService;
        this.registerService = registerService;
        this.toaster = toaster;
        this.router = router;
        this.spinner = spinner;
        this.renderer = renderer;
        this.conf = conf;
        this.http = http;
        this.value = '';
        this.DoctorData = [];
        this.dataSourceDoctorData = [];
        this.gridData = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.displayedColumns = [
            'Id',
            'FullName',
            'dob',
            'EmailID',
            'Age',
            'Gender',
            'Status',
            'View_Edit_Delete'
            //'Blocked_Unblocked',
            //'Specialties',
        ];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    DoctorComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.listen('document', 'click', (event) => {
        //   if (event.target.hasAttribute("view-person-id")) {
        //     this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
        //   }
        // });
    };
    DoctorComponent.prototype.receiveMessage = function ($event) {
        this.spinner.show();
        this.message = $event;
        this.modalService.dismissAll();
        this.Getjson();
    };
    DoctorComponent.prototype.Getjson = function (id) {
        var _this = this;
        this.spinner.show();
        this.ob = this.registerService.GetDoctorJsonDatas();
        this.ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { return _this.spinner.hide(); })).subscribe(function (dataa) {
            //this.gridData=dataa;
            _this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](dataa);
            _this.datasource.paginator = _this.paginator;
            _this.datasource.sort = _this.sort;
            //this.DoctorData = data;
            //this.dataSourceDoctorData = data;
            //console.log(this.DoctorData);
        }, function (error) { return console.log("Error in saving regiter data"); });
        //this.dataSourceDoctor = new MatTableDataSource(this.DoctorData);
        //console.log("Data Source: "+this.DoctorData);      
    };
    DoctorComponent.prototype.GetdataById = function (id) {
        var _this = this;
        this.spinner.show();
        this.registerService.GetDoctorJsonDatasByID(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
            _this.spinner.hide();
        })).subscribe(function (data) {
            _this.UserData = data;
        });
    };
    DoctorComponent.prototype.DeletedataById = function (id) {
        var _this = this;
        this.ob = this.registerService.DeleteDoctorJsonDatasByID(id);
        this.ob.subscribe(function (data) { _this.DeleteUserData = data; });
        console.log("DeleteUserData : " + this.DeleteUserData.id);
    };
    DoctorComponent.prototype.applyFilter = function () {
        var _this = this;
        console.log(this.value);
        if (this.value != '') {
            this.dataSourceDoctorData = this.DoctorData.filter(function (p) { return p.FullName.includes(_this.value); });
        }
        else {
            this.dataSourceDoctorData = this.DoctorData;
        }
        console.log(this.DoctorData);
        //this.value = this.value.trim(); // Remove whitespace
        //this.value = this.value.toLowerCase(); // Datasource defaults to lowercase matches
        this.datasource.filter = this.value.trim().toLocaleLowerCase();
    };
    DoctorComponent.prototype.Open = function (content, id) {
        this.spinner.show();
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
        this.GetdataById(id);
        //$("ViewM").modal('show');
        this.spinner.hide();
    };
    DoctorComponent.prototype.Viewopen = function (Viewcontent, id) {
        this.spinner.show();
        this.GetdataById(id);
        this.modalService.open(Viewcontent, { size: 'md', centered: true, scrollable: false });
    };
    DoctorComponent.prototype.Deleteopen = function (Deletecontent, id) {
        this.GetdataById(id);
        this.modalService.open(Deletecontent, { size: 'md', centered: true, scrollable: true });
    };
    DoctorComponent.prototype.Editopen = function (Editcontent, selectedDrId) {
        this.modalService.open(Editcontent, { size: 'xl', centered: true, scrollable: true });
        this.DrIdToUpdate = selectedDrId;
    };
    DoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Getjson();
        var that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 2,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                that.http.post(_this.conf.tempResourseAPI + "/Doctor", dataTablesParameters, {}).subscribe(function (resp) {
                    that.DoctorData = resp.data;
                    callback({
                        //recordsTotal: resp.recordsTotal,
                        //recordsFiltered: resp.recordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{
                    title: 'Title',
                    data: 'title'
                }, {
                    title: 'First name',
                    data: 'firstname'
                }, {
                    title: 'Last name',
                    data: 'lastname'
                }, {
                    title: 'Action',
                    render: function (data, type, full) {
                        return 'View';
                    },
                }]
        };
    };
    DoctorComponent.prototype.SoftDeleteDoctorData = function (doctorId) {
        var _this = this;
        debugger;
        this.modalService.dismissAll();
        console.log("ts.SoftDeleteDoctorData() hits");
        var obj = {};
        obj.id = doctorId,
            obj.Status = "InActive";
        this.ob = this.registerService.SoftDeleteDoctorData(obj);
        this.ob.subscribe(function (dataa) {
            console.log(dataa);
            if (dataa != null) {
                _this.success = true;
                _this.toaster.success("Success", "Doctor with Id: " + doctorId + " Deleted.", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, _this.functioncallbackFunction);
            }
        }, function (error) { return console.log("Error in deleting doctor data"); });
    };
    DoctorComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    DoctorComponent.prototype.gOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    DoctorComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] }
    ]; };
    DoctorComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"],] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"],] }]
    };
    DoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-doctor',
            template: _raw_loader_doctor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]],
            styles: [_doctor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _core_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">doctor</i>\n                      </div>\n                      <p class=\"card-category\">Doctor</p>\n                      <h3 class=\"card-title\">49/50\n                          <small></small>\n                      </h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons text-info\">read_more</i>\n                          <a href=\"/doctor\"> See all</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">nurse</i>\n                      </div>\n                      <p class=\"card-category\">Nurses</p>\n                      <h3 class=\"card-title\">70/80</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons text-info\">read_more</i> \n                          <a href=\"/nurse\"> See all</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"fa user-nurse\"></i>\n                      </div>\n                      <p class=\"card-category\">Patient</p>\n                      <h3 class=\"card-title\">245</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                        <i class=\"material-icons text-info\">read_more</i> \n                        <a href=\"/patient\"> See all</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">patients</i>\n                      </div>\n                      <p class=\"card-category\">Visits</p>\n                      <h3 class=\"card-title\">75/7 Days</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons text-info\">read_more</i> \n                          <a href=\"javascript:void(0)\"> See all</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          \n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Daily Sales</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Email Subscriptions</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Completed Tasks</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-tabs card-header-primary\">\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <span class=\"nav-tabs-title\">Tasks:</span>\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">bug_report</i> Bugs\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">code</i> Website\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">cloud</i> Server\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"profile\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"messages\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"settings\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                  </div>\n                  <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                              <th>ID</th>\n                              <th>Name</th>\n                              <th>Salary</th>\n                              <th>Country</th>\n                          </thead>\n                          <tbody>\n                              <tr>\n                                  <td>1</td>\n                                  <td>Dakota Rice</td>\n                                  <td>$36,738</td>\n                                  <td>Niger</td>\n                              </tr>\n                              <tr>\n                                  <td>2</td>\n                                  <td>Minerva Hooper</td>\n                                  <td>$23,789</td>\n                                  <td>Curaçao</td>\n                              </tr>\n                              <tr>\n                                  <td>3</td>\n                                  <td>Sage Rodriguez</td>\n                                  <td>$56,142</td>\n                                  <td>Netherlands</td>\n                              </tr>\n                              <tr>\n                                  <td>4</td>\n                                  <td>Philip Chaney</td>\n                                  <td>$38,735</td>\n                                  <td>Korea, South</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "HO/X":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
  \***************************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "/iSe");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */





var DataTablesModule =
/** @class */
function () {
  function DataTablesModule() {}

  DataTablesModule.forRoot = function () {
    return {
      ngModule: DataTablesModule
    };
  };

  DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DataTablesModule
  });
  DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    factory: function DataTablesModule_Factory(t) {
      return new (t || DataTablesModule)();
    },
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
  });

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, {
      declarations: function declarations() {
        return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
      },
      imports: function imports() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
      },
      exports: function exports() {
        return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]];
      }
    });
  })();

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
        exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
      }]
    }], function () {
      return [];
    }, null);
  })();

  return DataTablesModule;
}();



/***/ }),

/***/ "He/r":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/patient/patient.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n<div class=\"divclass\">\n    <div class=\"form-group\">\n      <div class=\"col-md-6\" style=\"padding-left:0px\">\n        <table class=\"mat-elevation-z8\" [ngClass]=\"{'btnCenter': true}\">\n        <th>\n          <mat-form-field class=\"example-form-field\">\n            <!-- <mat-label>Search Block/UnBlock</mat-label> -->\n            <input matInput type=\"text\" [(ngModel)]=\"value\" (keyup)=\"applyFilter()\" placeholder=\"Search here...\">\n          </mat-form-field>\n        </th>\n        <!-- <th>\n          <button class=\"btn\" style=\"float: right;\" (click)=\"open(content)\" [ngClass]=\"{'bgColorAdd': true}\" ><mat-icon>person_add</mat-icon></button>\n        </th>  -->\n      </table>\n      </div>\n    </div>\n  <div class=\"form-group\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" [ngClass]=\"{'Tableclass': true}\">\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->          \n      <!-- DrID Column -->\n      <ng-container matColumnDef=\"PatientID\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Patient ID. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>  \n      <!-- FullName Column -->\n      <ng-container matColumnDef=\"FullName\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Full Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.fullName}} </td>\n      </ng-container>  \n      <!-- Date_of_Birth Column -->\n      <ng-container matColumnDef=\"DOB\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> DOB </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.dob}} </td>\n      </ng-container>  \n      <!-- EmailID Column -->\n      <ng-container matColumnDef=\"EmailID\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> EmailID </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container> \n      <!-- ContactNo Column -->\n      <ng-container matColumnDef=\"ContactNo\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> ContactNo </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.contact}} </td>\n      </ng-container>  \n      <!-- Status Column -->\n      <ng-container matColumnDef=\"Status\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n      <!-- Blocked_Unblocked Column -->\n      <ng-container matColumnDef=\"Blocked_Unblocked\">\n        <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Is Locked </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.blocked_unblocked}} </td>\n      </ng-container>\n          <!-- View/Edit/Delete Column -->\n     <ng-container matColumnDef=\"View_Edit_Delete\">\n      <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Actions </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button class=\"btn\"  (click)=\"Viewopen(Viewcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"View\"><mat-icon>visibility</mat-icon></button>\n        <!-- <button class=\"btn\" (click)=\"Editopen(Editcontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Edit\"><mat-icon>edit</mat-icon></button> -->\n        <button class=\"btn\" (click)=\"Deleteopen(Deletecontent,element.id )\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Archive\"><mat-icon>delete</mat-icon></button>\n      </td>\n    </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n  <mat-paginator [length]='length' [pageSize]='pageSize' [pageSizeOptions]='pageSizeOptions' (page)='pageEvent = $event'  style=\"color: #0047AB; font-size: small;\"> </mat-paginator>\n  </div>\n  \n  \n  <div class=\"modalTagReg\">\n   <!-- View By ID PopUp -->\n   <ng-template #Viewcontent let-modal>\n    <div class=\"modal-header\" *ngIf=\"UserData\">\n      <!-- <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4> -->\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" *ngFor=\"let item of UserData\">\n      <h1 style=\"text-align: left;\">User id:  {{item.id}} </h1>\n      <!-- <form *ngFor=\"let item of dataSourceDoctorData\" [(ngModel)]=\"dataSourceDoctorData\"> -->\n        <form >    \n          <div class=\"main main-raised\" >\n            <div class=\"profile-content\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 ml-auto mr-auto\">\n                    <div class=\"profile\">\n                      <div class=\"avatar avatar1\">\n                        <img src=\"../../../assets/img/UserProfileIcon.webp\" alt=\"Circle Image\" class=\"img-raised rounded-circle\" [ngClass]=\"{'person_pin': true}\">\n                      </div>\n                      <div class=\"avatar avatar2\">\n                        <table style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\n                          <tr>\n                            <th class=\"wd27\">Name</th>\n                            <th class=\"wd73\"><h3 class=\"title\">{{item.fullName}}</h3></th>                          \n                          </tr>\n                          <!-- <tr>\n                            <th>Specialties</th>\n                            <td><h3>{{item.Specialties}}</h3></td>\n                          </tr> -->\n                          </table>\n                      </div>                   \n                    </div>\n                    <div class=\"name\">                      \n                      <!-- <hr/> -->\n                      <table class=\"table table-hover\" style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\n                        <tr>\n                          <td>Date of Birth</td>\n                          <td>{{item.dob}}</td>                          \n                        </tr>\n                        <tr>\n                          <td>Email Id</td>\n                          <td>{{item.email}}</td>\n                        </tr>\n                        <tr>\n                          <td>Phone No.</td>\n                          <td>{{item.contact}}g</td>\n                        </tr>\n                        <!-- <tr>\n                          <td>Address</td>\n                          <td>{{item.Address}}</td>\n                        </tr> -->\n                        <tr>\n                          <td>Status</td>\n                          <td>{{item.status}}</td>\n                        </tr>                        \n                      </table>                    \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <!-- <button type=\"button\" class=\"btn btn-outline\" (click)=\"modal.close('Save click')\">Save</button> -->\n    </div>\n  </ng-template>\n    <!-- View By ID PopUp -->\n  \n    <!-- Edit By ID PopUp -->  \n    <ng-template #Editcontent let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Update records</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- Update Modal -->\n        <h1 style=\"text-align: center;\">Doctor & Nurse Registration</h1>\n        <div class=\"signup-form\">\n            <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePractitionerData()\">\n                <h2>Register</h2>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-2\">\n                      <label for=\"Title\">Title: <span class=\"asterisk\"> *</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"title\" formControlName=\"title\" placeholder=\"\" required=\"required\">\n                      <span class=\"asterisk\" *ngIf=\"fg.get('title').touched && fg.get('title').errors?.required\">\n                        Title is required!\n                      </span>\n                    </div>\n                    <div class=\"col-xs-5\">\n                      <label for=\"firstname\">First Name: <span class=\"asterisk\"> *</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"firstname\" formControlName=\"firstname\">\n                      <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">\n                        FirstName is required!\n                      </span>\n                    </div>\n                    <div class=\"col-xs-5\">\n                      <label for=\"lastname\">Last Name: <span class=\"asterisk\"> *</span></label>\n                      <input type=\"text\" class=\"form-control\" name=\"lastname\" formControlName=\"lastname\">\n                      <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\n                        LastName is required!\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email: <span class=\"asterisk\"> *</span></label>\n                  <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\">\n                  <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.required\">\n                    Email is required!\n                  </span>\n                  <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.email\">\n                    Email is not valid!\n                  </span>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                      <label for=\"email\">DOB: <span class=\"asterisk\"> *</span></label>                    \n                      <input type=\"date\" [max]=\"getToday()\" class=\"form-control\" name=\"dob\" formControlName=\"dob\">\n                      <span class=\"asterisk\" *ngIf=\"fg.get('dob').touched && fg.get('dob').errors?.required\">\n                        DOB is required!\n                      </span>\n                    </div>\n                    <div class=\"col-xs-6\">\n                      <label for=\"role\">Role: </label><br />\n                      <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"role\" name=\"role\" value=\"Doctor\" checked>Doctor</label>\n                      <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"role\" name=\"role\" value=\"Nurse\">Nurse</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"contactno\">Contact No: <span class=\"asterisk\"> *</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"contactno\" formControlName=\"contactno\">\n                  <span class=\"asterisk\" *ngIf=\"fg.get('contactno').touched && fg.get('contactno').errors?.required\">\n                    contact no is required!\n                  </span>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"address\">Address: <span class=\"asterisk\"> *</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"address\" formControlName=\"address\">\n                  <span class=\"asterisk\" *ngIf=\"fg.get('address').touched && fg.get('address').errors?.required\">\n                    Address is required!\n                  </span>            \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"speciality\">Speciality: <span class=\"asterisk\"> *</span></label>\n                  <input type=\"text\" class=\"form-control\" name=\"speciality\" formControlName=\"speciality\">\n                  <span class=\"asterisk\" *ngIf=\"fg.get('speciality').touched && fg.get('speciality').errors?.required\">\n                    Speciality is required!\n                  </span>            \n                </div>\n                <div class=\"form-group\">\n                  <button id=\"btnSubmit\" class=\"btn\" [disabled]=\"!fg.valid\">Register Now</button>\n                  <button id=\"btnSubmit\" class=\"btn\" >Clear</button>\n                </div>\n            </form>\n            <div>\n              <h1 style=\"color: red;\">{{msg}}</h1>\n            </div>\n        </div>\n        <!-- Update Modal -->\n            </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Yes</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">No</button>\n      </div>\n    </ng-template>\n    <!-- Edit By ID PopUp -->\n  \n     <!-- Delete By ID PopUp -->  \n    <ng-template #Deletecontent let-modal>\n      <div class=\"modal-header\" *ngIf=\"UserData\">\n        <!-- <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4> -->\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" *ngFor=\"let item of UserData\">\n        <!-- <h1 style=\"text-align: left;\">User id: {{item.id}} is deleted</h1>        -->\n        <!-- <hr> -->\n        <h2>Are you sure you want to delete the user:</h2> <h3>{{item.fullName}}</h3>\n        <!-- <p>If delete click on delete or Cancel</p> -->\n      <!-- </div> -->\n      <!-- <button class=\"btn\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Delete\">Delete</button> -->\n      <div class=\"modal-footer\">\n        <!-- <button class=\"btn\" [ngClass]=\"{'bgColor': true}\" style=\"float: left;\" title=\"Delete\">Delete</button> -->\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"SoftDeletePatientData(item.id)\" title=\"Delete\">Delete</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Save click')\" title=\"Cancel\">Cancel</button>\n      </div>\n      </div>\n    </ng-template>\n    <!-- Delete By ID PopUp -->\n  </div>\n  </div>\n  </div>\n  ");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../calendar/calendar.component */ "7mpd");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared-modules/shared-material.module */ "DvRR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _admin_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../admin/doctor/doctor.component */ "Gsv1");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../admin/register/register.component */ "9LZo");
/* harmony import */ var _admin_patient_patient_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../admin/patient/patient.component */ "XOEH");
/* harmony import */ var _admin_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../admin/nurse/nurse.component */ "A7+T");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AdminLayoutModule = /** @class */ (function (_super) {
    __extends(AdminLayoutModule, _super);
    function AdminLayoutModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_20__["FullCalendarModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_23__["DataTablesModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_21__["SharedMaterialModule"],
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_12__["UpgradeComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__["CalendarComponent"],
                _admin_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_24__["DoctorComponent"],
                _admin_register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"],
                _admin_patient_patient_component__WEBPACK_IMPORTED_MODULE_26__["PatientComponent"],
                _admin_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_27__["NurseComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}(_shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_21__["SharedMaterialModule"]));



/***/ }),

/***/ "NL5l":
/*!***********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Nt+r":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-danger\">\n                <h4 class=\"card-title\">{{this.userrole}} Registraion</h4>\n                <p class=\"card-category\">Fill in the details</p>\n            </div>\n            <div class=\"card-body\">\n\n    <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePractitionerData()\">\n        \n        <div class=\"row\" style=\"display: none;\">\n            <div class=\"form-group col-md-6\">\n                <mat-form-field class=\"example-full-width form-group\">\n                    <!-- <input matInput placeholder=\"First Name\" required type=\"text\" formControlName=\"firstname\"> -->\n                    <input matInput type='text'  formControlName='id' >\n\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">FirstName is required!</span>\n            </div>\n        </div> \n        <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <mat-form-field class=\"example-full-width form-group\">\n                    <input matInput placeholder=\"First Name\" required type=\"text\" formControlName=\"firstname\">\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">FirstName is required!</span>\n            </div>\n            <div class=\"col-md-6 form-group\" >\n                <mat-form-field class=\"example-full-width form-group\">\n                    <input matInput placeholder=\"Last Name\" required type=\"text\" formControlName=\"lastname\">\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\n                    LastName is required!\n                </span>\n            </div>\n        </div> \n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Title</mat-label>\n                    <select matNativeControl required id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Select title\" required formControlName=\"title\">\n                        <option disabled selected value=\"\">Select Title</option>\n                        <option *ngFor=\"let title of titles\" value={{title[0]}}>{{title[1]}}</option>\n                    </select>\n                  </mat-form-field>\n            </div>\n                <div class=\"col-sm-6\">\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Gender</mat-label>\n                        <select id=\"gender\" matNativeControl name=\"gender\" class=\"form-control\" placeholder=\"Select gender\" required formControlName=\"gender\">\n                            <option disabled selected value=\"\">Select Gender</option>\n                            <option *ngFor=\"let gender of genders\" value={{gender[0]}}>{{gender[1]}}</option>\n                          </select>\n                      </mat-form-field>\n                    <!-- <label for=\"gender\" class=\"sr-only\">Gender<span class=\"asterisk\"> *</span></label>\n                    <select id=\"gender\" name=\"gender\" class=\"form-control\" placeholder=\"Select gender\" required formControlName=\"gender\">\n                      <option disabled selected value=\"\">Select Gender</option>\n                      <option *ngFor=\"let gender of genders\" value={{gender[0]}}>{{gender[1]}}</option>\n                    </select> -->\n                </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n            <!-- <label for=\"email\">Email: <span class=\"asterisk\"> *</span></label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\"> -->\n            <mat-form-field class=\"example-full-width form-group\">\n                <input matInput placeholder=\"Email\" required type=\"email\" formControlName=\"email\">\n            </mat-form-field>\n            <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.required\">\n                Email is required!\n            </span>\n            <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.email\">\n                Email is not valid!\n            </span>\n            </div>\n            <div class=\"form-group col-md-6\" *ngIf=\"this.fg.value.role=='Doctor'\">\n            <!-- <label for=\"speciality\">Speciality: <span class=\"asterisk\"> *</span></label>\n            <input type=\"text\" class=\"form-control\" name=\"speciality\" formControlName=\"speciality\"> -->\n            <mat-form-field class=\"example-full-width form-group\">\n                <input matInput placeholder=\"Speciality\"  type=\"text\" formControlName=\"speciality\">\n            </mat-form-field>\n            <span class=\"asterisk\" *ngIf=\"fg.get('speciality').touched && fg.get('speciality').errors?.required\">\n                Speciality is required!\n            </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n                <!-- <label for=\"email\">DOB: <span class=\"asterisk\"> *</span></label>                    \n                <input type=\"date\" [max]=\"getToday()\" class=\"form-control\" name=\"dob\" formControlName=\"dob\"> -->\n                <mat-form-field class=\"example-full-width form-group\">\n                    <input matInput placeholder=\"date of birth\" required type=\"date\" formControlName=\"dob\" >\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('dob').touched && fg.get('dob').errors?.required\">\n                    DOB is required!\n                </span> \n            </div>\n            <div class=\"col-md-6 form-group\" style=\"display: none;\">\n                <label for=\"role\">Role: </label><br />\n                <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"role\" name=\"role\" value=\"Doctor\" checked>Doctor</label>\n                <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"role\" name=\"role\" value=\"Nurse\">Nurse</label>\n            </div>\n            <div class=\"form-group col-md-6\">\n                <!-- <label for=\"contactno\">Contact No: <span class=\"asterisk\"> *</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"contactno\" formControlName=\"contactno\"> -->\n                <mat-form-field class=\"example-full-width form-group\">\n                    <input matInput placeholder=\"Contact no\" required type=\"contactno\" formControlName=\"contactno\">\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('contactno').touched && fg.get('contactno').errors?.required\">\n                    contact no is required!\n                </span>            \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n                <!-- <label for=\"address\">Address: <span class=\"asterisk\"> *</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"address\" formControlName=\"address\"> -->\n                <mat-form-field class=\"example-full-width form-group\">\n                    <textarea matInput placeholder=\"Enter Address\" required type=\"address\" formControlName=\"address\"></textarea>\n                </mat-form-field>\n                <span class=\"asterisk\" *ngIf=\"fg.get('address').touched && fg.get('address').errors?.required\">\n                    Address is required!\n                </span>            \n            </div>\n        </div>\n        <div class=\"form-group text-right\">            \n            <button id=\"btnSubmit\" class=\"btn btn-primary\" [disabled]=\"!fg.valid\">Save</button>\n            <a id=\"btnCancel\" href=\"javascript:void(0)\"  class=\"btn btn-secondary\" (click)=\"sendMessage()\">Cancel</a>\n        </div>\n    </form>\n    \n        <h1 style=\"color: red;\">{{msg}}</h1>\n    </div>\n    <!--<div class=\"text-center\">Already have an account? <a href=\"#\">Sign in</a></div>-->\n</div> \n</div>\n</div>");

/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "PN1e":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.js ***!
  \****************************************************/
/*! exports provided: default, DayGridView, DayTable, DayTableSlicer, Table, TableView, buildDayTableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayGridView", function() { return DayTableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTable", function() { return DayTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTableSlicer", function() { return DayTableSlicer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableView", function() { return TableView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDayTableModel", function() { return buildDayTableModel; });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "pDWP");
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ "1hAE");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "xf22");
/*!
FullCalendar v5.5.0
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var TableView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableView, _super);

  function TableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.headerElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    return _this;
  }

  TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var sections = [];
    var stickyHeaderDates = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["SimpleScrollGrid"], {
        liquid: !props.isHeightAuto && !props.forPrint,
        cols: []
        /* TODO: make optional? */
        ,
        sections: sections
      }));
    });
  };

  TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
    var ScrollGrid = this.context.pluginHooks.scrollGridImpl;

    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }

    var _a = this,
        props = _a.props,
        context = _a.context;

    var stickyHeaderDates = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyHeaderDates"])(context.options);
    var stickyFooterScrollbar = !props.forPrint && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getStickyFooterScrollbar"])(context.options);
    var sections = [];

    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }

    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });

    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderScrollShim"]
        }]
      });
    }

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["ViewRoot"], {
      viewSpec: context.viewSpec
    }, function (rootElRef, classNames) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        ref: rootElRef,
        className: ['fc-daygrid'].concat(classNames).join(' ')
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        colGroups: [{
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    });
  };

  return TableView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function splitSegsByRow(segs, rowCnt) {
  var byRow = [];

  for (var i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }

  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    byRow[seg.row].push(seg);
  }

  return byRow;
}

function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];

  for (var i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }

  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    byCol[seg.firstCol].push(seg);
  }

  return byCol;
}

function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];

  if (!ui) {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }

    for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
      var seg = _a[_i];
      byRow[seg.row].segs.push(seg);
    }
  }

  return byRow;
}

var TableCellTop =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableCellTop, _super);

  function TableCellTop() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableCellTop.prototype.render = function () {
    var props = this.props;
    var navLinkAttrs = this.context.options.navLinks ? {
      'data-navlink': Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkData"])(props.date),
      tabIndex: 0
    } : {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], {
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      defaultContent: renderTopInner
    }, function (innerElRef, innerContent) {
      return (innerContent || props.forceDayTop) && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "fc-daygrid-day-top",
        ref: innerElRef
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        className: "fc-daygrid-day-number"
      }, navLinkAttrs), innerContent || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\xA0")));
    });
  };

  return TableCellTop;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function renderTopInner(props) {
  return props.dayNumberText;
}

var DEFAULT_WEEK_NUM_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  week: 'narrow'
});

var TableCell =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableCell, _super);

  function TableCell() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (el) {
      _this.rootEl = el;
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, el);
    };

    _this.handleMoreLinkClick = function (ev) {
      var props = _this.props;

      if (props.onMoreClick) {
        var allSegs = props.segsByEachCol;
        var hiddenSegs = allSegs.filter(function (seg) {
          return props.segIsHidden[seg.eventRange.instance.instanceId];
        });
        props.onMoreClick({
          date: props.date,
          allSegs: allSegs,
          hiddenSegs: hiddenSegs,
          moreCnt: props.moreCnt,
          dayEl: _this.rootEl,
          ev: ev
        });
      }
    };

    return _this;
  }

  TableCell.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date,
        dateProfile = props.dateProfile;
    var hookProps = {
      num: props.moreCnt,
      text: props.buildMoreLinkText(props.moreCnt),
      view: viewApi
    };
    var navLinkAttrs = options.navLinks ? {
      'data-navlink': Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildNavLinkData"])(date, 'week'),
      tabIndex: 0
    } : {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], {
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraHookProps: props.extraHookProps,
      elRef: this.handleRootEl
    }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        ref: dayElRef,
        className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ')
      }, rootDataAttrs, props.extraDataAttrs), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
        ref: props.innerElRef
        /* different from hook system! RENAME */

      }, props.showWeekNumber && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["WeekNumberRoot"], {
        date: date,
        defaultFormat: DEFAULT_WEEK_NUM_FORMAT
      }, function (weekElRef, weekClassNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          ref: weekElRef,
          className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ')
        }, navLinkAttrs), innerContent);
      }), !isDisabled && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableCellTop, {
        date: date,
        dateProfile: dateProfile,
        showDayNumber: props.showDayNumber,
        forceDayTop: props.forceDayTop,
        todayRange: props.todayRange,
        extraHookProps: props.extraHookProps
      }), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "fc-daygrid-day-events",
        ref: props.fgContentElRef,
        style: {
          paddingBottom: props.fgPaddingBottom
        }
      }, props.fgContent, Boolean(props.moreCnt) && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "fc-daygrid-day-bottom",
        style: {
          marginTop: props.moreMarginTop
        }
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RenderHook"], {
        hookProps: hookProps,
        classNames: options.moreLinkClassNames,
        content: options.moreLinkContent,
        defaultContent: renderMoreLinkInner,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, function (rootElRef, classNames, innerElRef, innerContent) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
          ref: rootElRef,
          className: ['fc-daygrid-more-link'].concat(classNames).join(' '),
          onClick: _this.handleMoreLinkClick
        }, innerContent);
      }))), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "fc-daygrid-day-bg"
      }, props.bgContent)));
    });
  };

  return TableCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

TableCell.addPropsEquality({
  onMoreClick: true
});

function renderMoreLinkInner(props) {
  return props.text;
}

var DEFAULT_TABLE_EVENT_TIME_FORMAT = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createFormatter"])({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});

function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && // can't be multi-day
  seg.isStart && // "
  seg.isEnd // "
  ;
}

var TableListItemEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableListItemEvent, _super);

  function TableListItemEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableListItemEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    var timeText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildSegTimeText"])(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["EventRoot"], {
      seg: props.seg,
      timeText: timeText,
      defaultContent: renderInnerContent,
      isDragging: props.isDragging,
      isResizing: false,
      isDateSelecting: false,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent) {
      return (// we don't use styles!
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '),
          ref: rootElRef
        }, getSegAnchorAttrs(props.seg)), innerContent)
      );
    });
  };

  return TableListItemEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function renderInnerContent(innerProps) {
  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: innerProps.borderColor || innerProps.backgroundColor
    }
  }), innerProps.timeText && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "fc-event-time"
  }, innerProps.timeText), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "fc-event-title"
  }, innerProps.event.title || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\xA0")));
}

function getSegAnchorAttrs(seg) {
  var url = seg.eventRange.def.url;
  return url ? {
    href: url
  } : {};
}

var TableBlockEvent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableBlockEvent, _super);

  function TableBlockEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableBlockEvent.prototype.render = function () {
    var props = this.props;
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["StandardEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, {
      extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  };

  return TableBlockEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

function computeFgSegPlacement( // for one row. TODO: print mode?
cellModels, segs, dayMaxEvents, dayMaxEventRows, eventHeights, maxContentHeight, colCnt, eventOrderSpecs) {
  var colPlacements = []; // if event spans multiple cols, its present in each col

  var moreCnts = []; // by-col

  var segIsHidden = {};
  var segTops = {}; // always populated for each seg

  var segMarginTops = {}; // simetimes populated for each seg

  var moreTops = {};
  var paddingBottoms = {}; // for each cell's inner-wrapper div

  for (var i = 0; i < colCnt; i += 1) {
    colPlacements.push([]);
    moreCnts.push(0);
  }

  segs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["sortEventSegs"])(segs, eventOrderSpecs);

  for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
    var seg = segs_1[_i];
    var instanceId = seg.eventRange.instance.instanceId;
    var eventHeight = eventHeights[instanceId + ':' + seg.firstCol];
    placeSeg(seg, eventHeight || 0); // will keep colPlacements sorted by top
  }

  if (dayMaxEvents === true || dayMaxEventRows === true) {
    limitByMaxHeight(moreCnts, segIsHidden, colPlacements, maxContentHeight); // populates moreCnts/segIsHidden
  } else if (typeof dayMaxEvents === 'number') {
    limitByMaxEvents(moreCnts, segIsHidden, colPlacements, dayMaxEvents); // populates moreCnts/segIsHidden
  } else if (typeof dayMaxEventRows === 'number') {
    limitByMaxRows(moreCnts, segIsHidden, colPlacements, dayMaxEventRows); // populates moreCnts/segIsHidden
  } // computes segTops/segMarginTops/moreTops/paddingBottoms


  for (var col = 0; col < colCnt; col += 1) {
    var placements = colPlacements[col];
    var currentNonAbsBottom = 0;
    var currentAbsHeight = 0;

    for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
      var placement = placements_1[_a];
      var seg = placement.seg;

      if (!segIsHidden[seg.eventRange.instance.instanceId]) {
        segTops[seg.eventRange.instance.instanceId] = placement.top; // from top of container

        if (seg.firstCol === seg.lastCol && seg.isStart && seg.isEnd) {
          // TODO: simpler way? NOT DRY
          segMarginTops[seg.eventRange.instance.instanceId] = placement.top - currentNonAbsBottom; // from previous seg bottom

          currentAbsHeight = 0;
          currentNonAbsBottom = placement.bottom;
        } else {
          // multi-col event, abs positioned
          currentAbsHeight = placement.bottom - currentNonAbsBottom;
        }
      }
    }

    if (currentAbsHeight) {
      if (moreCnts[col]) {
        moreTops[col] = currentAbsHeight;
      } else {
        paddingBottoms[col] = currentAbsHeight;
      }
    }
  }

  function placeSeg(seg, segHeight) {
    if (!tryPlaceSegAt(seg, segHeight, 0)) {
      for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
        for (var _i = 0, _a = colPlacements[col]; _i < _a.length; _i++) {
          // will repeat multi-day segs!!!!!!! bad!!!!!!
          var placement = _a[_i];

          if (tryPlaceSegAt(seg, segHeight, placement.bottom)) {
            return;
          }
        }
      }
    }
  }

  function tryPlaceSegAt(seg, segHeight, top) {
    if (canPlaceSegAt(seg, segHeight, top)) {
      for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
        var placements = colPlacements[col];
        var insertionIndex = 0;

        while (insertionIndex < placements.length && top >= placements[insertionIndex].top) {
          insertionIndex += 1;
        }

        placements.splice(insertionIndex, 0, {
          seg: seg,
          top: top,
          bottom: top + segHeight
        });
      }

      return true;
    }

    return false;
  }

  function canPlaceSegAt(seg, segHeight, top) {
    for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
      for (var _i = 0, _a = colPlacements[col]; _i < _a.length; _i++) {
        var placement = _a[_i];

        if (top < placement.bottom && top + segHeight > placement.top) {
          // collide?
          return false;
        }
      }
    }

    return true;
  } // what does this do!?


  for (var instanceIdAndFirstCol in eventHeights) {
    if (!eventHeights[instanceIdAndFirstCol]) {
      segIsHidden[instanceIdAndFirstCol.split(':')[0]] = true;
    }
  }

  var segsByFirstCol = colPlacements.map(extractFirstColSegs); // operates on the sorted cols

  var segsByEachCol = colPlacements.map(function (placements, col) {
    var segsForCols = extractAllColSegs(placements);
    segsForCols = resliceDaySegs(segsForCols, cellModels[col].date, col);
    return segsForCols;
  });
  return {
    segsByFirstCol: segsByFirstCol,
    segsByEachCol: segsByEachCol,
    segIsHidden: segIsHidden,
    segTops: segTops,
    segMarginTops: segMarginTops,
    moreCnts: moreCnts,
    moreTops: moreTops,
    paddingBottoms: paddingBottoms
  };
}

function extractFirstColSegs(oneColPlacements, col) {
  var segs = [];

  for (var _i = 0, oneColPlacements_1 = oneColPlacements; _i < oneColPlacements_1.length; _i++) {
    var placement = oneColPlacements_1[_i];

    if (placement.seg.firstCol === col) {
      segs.push(placement.seg);
    }
  }

  return segs;
}

function extractAllColSegs(oneColPlacements) {
  var segs = [];

  for (var _i = 0, oneColPlacements_2 = oneColPlacements; _i < oneColPlacements_2.length; _i++) {
    var placement = oneColPlacements_2[_i];
    segs.push(placement.seg);
  }

  return segs;
}

function limitByMaxHeight(hiddenCnts, segIsHidden, colPlacements, maxContentHeight) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, true, function (placement) {
    return placement.bottom <= maxContentHeight;
  });
}

function limitByMaxEvents(hiddenCnts, segIsHidden, colPlacements, dayMaxEvents) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, false, function (placement, levelIndex) {
    return levelIndex < dayMaxEvents;
  });
}

function limitByMaxRows(hiddenCnts, segIsHidden, colPlacements, dayMaxEventRows) {
  limitEvents(hiddenCnts, segIsHidden, colPlacements, true, function (placement, levelIndex) {
    return levelIndex < dayMaxEventRows;
  });
}
/*
populates the given hiddenCnts/segIsHidden, which are supplied empty.
TODO: return them instead
*/


function limitEvents(hiddenCnts, segIsHidden, colPlacements, _moreLinkConsumesLevel, isPlacementInBounds) {
  var colCnt = hiddenCnts.length;
  var segIsVisible = {}; // TODO: instead, use segIsHidden with true/false?

  var visibleColPlacements = []; // will mirror colPlacements

  for (var col = 0; col < colCnt; col += 1) {
    visibleColPlacements.push([]);
  }

  for (var col = 0; col < colCnt; col += 1) {
    var placements = colPlacements[col];
    var level = 0;

    for (var _i = 0, placements_2 = placements; _i < placements_2.length; _i++) {
      var placement = placements_2[_i];

      if (isPlacementInBounds(placement, level)) {
        recordVisible(placement);
      } else {
        recordHidden(placement, level, _moreLinkConsumesLevel);
      } // only considered a level if the seg had height


      if (placement.top !== placement.bottom) {
        level += 1;
      }
    }
  }

  function recordVisible(placement) {
    var seg = placement.seg;
    var instanceId = seg.eventRange.instance.instanceId;

    if (!segIsVisible[instanceId]) {
      segIsVisible[instanceId] = true;

      for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
        var destPlacements = visibleColPlacements[col];
        var newPosition = 0; // insert while keeping top sorted in each column

        while (newPosition < destPlacements.length && placement.top >= destPlacements[newPosition].top) {
          newPosition += 1;
        }

        destPlacements.splice(newPosition, 0, placement);
      }
    }
  }

  function recordHidden(placement, currentLevel, moreLinkConsumesLevel) {
    var seg = placement.seg;
    var instanceId = seg.eventRange.instance.instanceId;

    if (!segIsHidden[instanceId]) {
      segIsHidden[instanceId] = true;

      for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
        hiddenCnts[col] += 1;
        var hiddenCnt = hiddenCnts[col];

        if (moreLinkConsumesLevel && hiddenCnt === 1 && currentLevel > 0) {
          var doomedLevel = currentLevel - 1;

          while (visibleColPlacements[col].length > doomedLevel) {
            recordHidden(visibleColPlacements[col].pop(), // removes
            visibleColPlacements[col].length, // will execute after the pop. will be the index of the removed placement
            false);
          }
        }
      }
    }
  }
} // Given the events within an array of segment objects, reslice them to be in a single day


function resliceDaySegs(segs, dayDate, colIndex) {
  var dayStart = dayDate;
  var dayEnd = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(dayStart, 1);
  var dayRange = {
    start: dayStart,
    end: dayEnd
  };
  var newSegs = [];

  for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
    var seg = segs_2[_i];
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["intersectRanges"])(origRange, dayRange);

    if (slicedRange) {
      newSegs.push(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, seg), {
        firstCol: colIndex,
        lastCol: colIndex,
        eventRange: {
          def: eventRange.def,
          ui: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, eventRange.ui), {
            durationEditable: false
          }),
          instance: eventRange.instance,
          range: slicedRange
        },
        isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
        isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
      }));
    }
  }

  return newSegs;
}

var TableRow =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableRow, _super);

  function TableRow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the <td>

    _this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the fc-daygrid-day-frame

    _this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // the fc-daygrid-day-events

    _this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"](); // indexed by "instanceId:firstCol"

    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    return _this;
  }

  TableRow.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var colCnt = props.cells.length;
    var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);

    var _b = computeFgSegPlacement(props.cells, props.fgEventSegs, props.dayMaxEvents, props.dayMaxEventRows, state.segHeights, state.maxContentHeight, colCnt, context.options.eventOrder),
        paddingBottoms = _b.paddingBottoms,
        segsByFirstCol = _b.segsByFirstCol,
        segsByEachCol = _b.segsByEachCol,
        segIsHidden = _b.segIsHidden,
        segTops = _b.segTops,
        segMarginTops = _b.segMarginTops,
        moreCnts = _b.moreCnts,
        moreTops = _b.moreTops;

    var selectedInstanceHash = // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
      ref: this.rootElRef
    }, props.renderIntro && props.renderIntro(), props.cells.map(function (cell, col) {
      var normalFgNodes = _this.renderFgSegs(segsByFirstCol[col], segIsHidden, segTops, segMarginTops, selectedInstanceHash, props.todayRange);

      var mirrorFgNodes = _this.renderFgSegs(mirrorSegsByCol[col], {}, segTops, // use same tops as real rendering
      {}, {}, props.todayRange, Boolean(props.eventDrag), Boolean(props.eventResize), false);

      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableCell, {
        key: cell.key,
        elRef: _this.cellElRefs.createRef(cell.key),
        innerElRef: _this.frameElRefs.createRef(cell.key)
        /* FF <td> problem, but okay to use for left/right. TODO: rename prop */
        ,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers
        /* even displaying weeknum for row, not necessarily day */
        ,
        todayRange: props.todayRange,
        extraHookProps: cell.extraHookProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        moreCnt: moreCnts[col],
        buildMoreLinkText: props.buildMoreLinkText,
        onMoreClick: function onMoreClick(arg) {
          props.onMoreClick(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, arg), {
            fromCol: col
          }));
        },
        segIsHidden: segIsHidden,
        moreMarginTop: moreTops[col]
        /* rename */
        ,
        segsByEachCol: segsByEachCol[col],
        fgPaddingBottom: paddingBottoms[col],
        fgContentElRef: _this.fgElRefs.createRef(cell.key),
        fgContent: // Fragment scopes the keys
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, normalFgNodes), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, mirrorFgNodes)),
        bgContent: // Fragment scopes the keys
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, _this.renderFillSegs(highlightSegsByCol[col], 'highlight'), _this.renderFillSegs(businessHoursByCol[col], 'non-business'), _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
      });
    }));
  };

  TableRow.prototype.componentDidMount = function () {
    this.updateSizing(true);
  };

  TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
    var currentProps = this.props;
    this.updateSizing(!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["isPropsEqual"])(prevProps, currentProps));
  };

  TableRow.prototype.getHighlightSegs = function () {
    var props = this.props;

    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return props.dateSelectionSegs;
  };

  TableRow.prototype.getMirrorSegs = function () {
    var props = this.props;

    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }

    return [];
  };

  TableRow.prototype.renderFgSegs = function (segs, segIsHidden, // does NOT mean display:hidden
  segTops, segMarginTops, selectedInstanceHash, todayRange, isDragging, isResizing, isDateSelecting) {
    var context = this.context;
    var eventSelection = this.props.eventSelection;
    var framePositions = this.state.framePositions;
    var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1

    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        var instanceId = seg.eventRange.instance.instanceId;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var isSelected = selectedInstanceHash[instanceId];
        var isInvisible = segIsHidden[instanceId] || isSelected; // TODO: simpler way? NOT DRY

        var isAbsolute = segIsHidden[instanceId] || isMirror || seg.firstCol !== seg.lastCol || !seg.isStart || !seg.isEnd;
        var marginTop = void 0;
        var top_1 = void 0;
        var left = void 0;
        var right = void 0;

        if (isAbsolute) {
          top_1 = segTops[instanceId];

          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        } else {
          marginTop = segMarginTops[instanceId];
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        */


        nodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: instanceId,
          // in print mode when in mult cols, could collide
          ref: isMirror ? null : this.segHarnessRefs.createRef(instanceId + ':' + seg.firstCol),
          style: {
            visibility: isInvisible ? 'hidden' : '',
            marginTop: marginTop || '',
            top: top_1 || '',
            left: left || '',
            right: right || ''
          }
        }, hasListItemDisplay(seg) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableListItemEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableBlockEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange)))));
      }
    }

    return nodes;
  };

  TableRow.prototype.renderFillSegs = function (segs, fillType) {
    var isRtl = this.context.isRtl;
    var todayRange = this.props.todayRange;
    var framePositions = this.state.framePositions;
    var nodes = [];

    if (framePositions) {
      for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
        var seg = segs_2[_i];
        var leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          key: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["buildEventRangeKey"])(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BgEvent"], Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["renderFill"])(fillType)));
      }
    }

    return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}], nodes));
  };

  TableRow.prototype.updateSizing = function (isExternalSizingChange) {
    var _a = this,
        props = _a.props,
        frameElRefs = _a.frameElRefs;

    if (props.clientWidth !== null) {
      // positioning ready?
      if (isExternalSizingChange) {
        var frameEls = props.cells.map(function (cell) {
          return frameElRefs.currentMap[cell.key];
        });

        if (frameEls.length) {
          var originEl = this.rootElRef.current;
          this.setState({
            framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](originEl, frameEls, true, // isHorizontal
            false)
          });
        }
      }

      var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.setState({
        segHeights: this.computeSegHeights(),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  };

  TableRow.prototype.computeSegHeights = function () {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["mapHash"])(this.segHarnessRefs.currentMap, function (eventHarnessEl) {
      return eventHarnessEl.getBoundingClientRect().height;
    });
  };

  TableRow.prototype.computeMaxContentHeight = function () {
    var firstKey = this.props.cells[0].key;
    var cellEl = this.cellElRefs.currentMap[firstKey];
    var fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  };

  TableRow.prototype.getCellEls = function () {
    var elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(function (cell) {
      return elMap[cell.key];
    });
  };

  return TableRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

TableRow.addPropsEquality({
  onMoreClick: true
});
TableRow.addStateEquality({
  segHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["isPropsEqual"]
});
var PADDING_FROM_VIEWPORT = 10;
var SCROLL_DEBOUNCE = 10;

var Popover =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Popover, _super);

  function Popover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.repositioner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DelayedRunner"](_this.updateSize.bind(_this));

    _this.handleRootEl = function (el) {
      _this.rootEl = el;

      if (_this.props.elRef) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, el);
      }
    }; // Triggered when the user clicks *anywhere* in the document, for the autoHide feature


    _this.handleDocumentMousedown = function (ev) {
      var onClose = _this.props.onClose; // only hide the popover if the click happened outside the popover

      if (onClose && !_this.rootEl.contains(ev.target)) {
        onClose();
      }
    };

    _this.handleDocumentScroll = function () {
      _this.repositioner.request(SCROLL_DEBOUNCE);
    };

    _this.handleCloseClick = function () {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    return _this;
  }

  Popover.prototype.render = function () {
    var theme = this.context.theme;
    var props = this.props;
    var classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
      className: classNames.join(' ')
    }, props.extraAttrs, {
      ref: this.handleRootEl
    }), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: "fc-popover-title"
    }, props.title), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      onClick: this.handleCloseClick
    })), Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children));
  };

  Popover.prototype.componentDidMount = function () {
    document.addEventListener('mousedown', this.handleDocumentMousedown);
    document.addEventListener('scroll', this.handleDocumentScroll);
    this.updateSize();
  };

  Popover.prototype.componentWillUnmount = function () {
    document.removeEventListener('mousedown', this.handleDocumentMousedown);
    document.removeEventListener('scroll', this.handleDocumentScroll);
  }; // TODO: adjust on window resize

  /*
  NOTE: the popover is position:fixed, so coordinates are relative to the viewport
  NOTE: the PARENT calls this as well, on window resize. we would have wanted to use the repositioner,
        but need to ensure that all other components have updated size first (for alignmentEl)
  */


  Popover.prototype.updateSize = function () {
    var _a = this.props,
        alignmentEl = _a.alignmentEl,
        topAlignmentEl = _a.topAlignmentEl;
    var rootEl = this.rootEl;

    if (!rootEl) {
      return; // not sure why this was null, but we shouldn't let external components call updateSize() anyway
    }

    var dims = rootEl.getBoundingClientRect(); // only used for width,height

    var alignment = alignmentEl.getBoundingClientRect();
    var top = topAlignmentEl ? topAlignmentEl.getBoundingClientRect().top : alignment.top;
    top = Math.min(top, window.innerHeight - dims.height - PADDING_FROM_VIEWPORT);
    top = Math.max(top, PADDING_FROM_VIEWPORT);
    var left;

    if (this.context.isRtl) {
      left = alignment.right - dims.width;
    } else {
      left = alignment.left;
    }

    left = Math.min(left, window.innerWidth - dims.width - PADDING_FROM_VIEWPORT);
    left = Math.max(left, PADDING_FROM_VIEWPORT);
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["applyStyle"])(rootEl, {
      top: top,
      left: left
    });
  };

  return Popover;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

var MorePopover =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MorePopover, _super);

  function MorePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    return _this;
  }

  MorePopover.prototype.render = function () {
    var _a = this.context,
        options = _a.options,
        dateEnv = _a.dateEnv;
    var props = this.props;
    var date = props.date,
        hiddenInstances = props.hiddenInstances,
        todayRange = props.todayRange,
        dateProfile = props.dateProfile,
        selectedInstanceId = props.selectedInstanceId;
    var title = dateEnv.format(date, options.dayPopoverFormat);
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellRoot"], {
      date: date,
      dateProfile: dateProfile,
      todayRange: todayRange,
      elRef: this.rootElRef
    }, function (rootElRef, dayClassNames, dataAttrs) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
        elRef: rootElRef,
        title: title,
        extraClassNames: ['fc-more-popover'].concat(dayClassNames),
        extraAttrs: dataAttrs,
        onClose: props.onCloseClick,
        alignmentEl: props.alignmentEl,
        topAlignmentEl: props.topAlignmentEl
      }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayCellContent"], {
        date: date,
        dateProfile: dateProfile,
        todayRange: todayRange
      }, function (innerElRef, innerContent) {
        return innerContent && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "fc-more-popover-misc",
          ref: innerElRef
        }, innerContent);
      }), props.segs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "fc-daygrid-event-harness",
          key: instanceId,
          style: {
            visibility: hiddenInstances[instanceId] ? 'hidden' : ''
          }
        }, hasListItemDisplay(seg) ? Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableListItemEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: false,
          isSelected: instanceId === selectedInstanceId,
          defaultDisplayEventEnd: false
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableBlockEvent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
          seg: seg,
          isDragging: false,
          isResizing: false,
          isDateSelecting: false,
          isSelected: instanceId === selectedInstanceId,
          defaultDisplayEventEnd: false
        }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["getSegMeta"])(seg, todayRange))));
      }));
    });
  };

  MorePopover.prototype.positionToHit = function (positionLeft, positionTop, originEl) {
    var rootEl = this.rootElRef.current;

    if (!originEl || !rootEl) {
      // why?
      return null;
    }

    var originRect = originEl.getBoundingClientRect();
    var elRect = rootEl.getBoundingClientRect();
    var newOriginLeft = elRect.left - originRect.left;
    var newOriginTop = elRect.top - originRect.top;
    var localLeft = positionLeft - newOriginLeft;
    var localTop = positionTop - newOriginTop;
    var date = this.props.date;

    if ( // ugly way to detect intersection
    localLeft >= 0 && localLeft < elRect.width && localTop >= 0 && localTop < elRect.height) {
      return {
        dateSpan: {
          allDay: true,
          range: {
            start: date,
            end: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(date, 1)
          }
        },
        dayEl: rootEl,
        relativeRect: {
          left: newOriginLeft,
          top: newOriginTop,
          right: elRect.width,
          bottom: elRect.height
        },
        layer: 1
      };
    }

    return null;
  };

  return MorePopover;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

var Table =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Table, _super);

  function Table() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.splitBusinessHourSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitBgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitFgEventSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitDateSelectionSegs = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitSegsByRow);
    _this.splitEventDrag = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByRow);
    _this.splitEventResize = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(splitInteractionByRow);
    _this.buildBuildMoreLinkText = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildBuildMoreLinkText);
    _this.morePopoverRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["RefMap"]();
    _this.state = {
      morePopoverState: null
    };

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["setRef"])(_this.props.elRef, rootEl);
    }; // TODO: bad names "more link click" versus "more click"


    _this.handleMoreLinkClick = function (arg) {
      var context = _this.context;
      var dateEnv = context.dateEnv;
      var clickOption = context.options.moreLinkClick;

      function segForPublic(seg) {
        var _a = seg.eventRange,
            def = _a.def,
            instance = _a.instance,
            range = _a.range;
        return {
          event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["EventApi"](context, def, instance),
          start: dateEnv.toDate(range.start),
          end: dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }

      if (typeof clickOption === 'function') {
        clickOption = clickOption({
          date: dateEnv.toDate(arg.date),
          allDay: true,
          allSegs: arg.allSegs.map(segForPublic),
          hiddenSegs: arg.hiddenSegs.map(segForPublic),
          jsEvent: arg.ev,
          view: context.viewApi
        }); // hack to handle void
      }

      if (!clickOption || clickOption === 'popover') {
        _this.setState({
          morePopoverState: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, arg), {
            currentFgEventSegs: _this.props.fgEventSegs,
            fromRow: arg.fromRow,
            fromCol: arg.fromCol
          })
        });
      } else if (typeof clickOption === 'string') {
        // a view name
        context.calendarApi.zoomTo(arg.date, clickOption);
      }
    };

    _this.handleMorePopoverClose = function () {
      _this.setState({
        morePopoverState: null
      });
    };

    return _this;
  }

  Table.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var dateProfile = props.dateProfile,
        dayMaxEventRows = props.dayMaxEventRows,
        dayMaxEvents = props.dayMaxEvents,
        expandRows = props.expandRows;
    var morePopoverState = this.state.morePopoverState;
    var rowCnt = props.cells.length;
    var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    var buildMoreLinkText = this.buildBuildMoreLinkText(this.context.options.moreLinkText);
    var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true; // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?

    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }

    var classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural'];
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classNames.join(' '),
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["NowTimer"], {
      unit: "day"
    }, function (nowDate, todayRange) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
        className: "fc-scrollgrid-sync-table",
        style: {
          width: props.clientWidth,
          minWidth: props.tableMinWidth,
          height: expandRows ? props.clientHeight : ''
        }
      }, props.colGroupNode, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, props.cells.map(function (cells, row) {
        return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TableRow, {
          ref: _this.rowRefs.createRef(row),
          key: cells.length ? cells[0].date.toISOString()
          /* best? or put key on cell? or use diff formatter? */
          : row // in case there are no cells (like when resource view is loading)
          ,
          showDayNumbers: rowCnt > 1,
          showWeekNumbers: props.showWeekNumbers,
          todayRange: todayRange,
          dateProfile: dateProfile,
          cells: cells,
          renderIntro: props.renderRowIntro,
          businessHourSegs: businessHourSegsByRow[row],
          eventSelection: props.eventSelection,
          bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay)
          /* hack */
          ,
          fgEventSegs: fgEventSegsByRow[row],
          dateSelectionSegs: dateSelectionSegsByRow[row],
          eventDrag: eventDragByRow[row],
          eventResize: eventResizeByRow[row],
          dayMaxEvents: dayMaxEvents,
          dayMaxEventRows: dayMaxEventRows,
          clientWidth: props.clientWidth,
          clientHeight: props.clientHeight,
          buildMoreLinkText: buildMoreLinkText,
          onMoreClick: function onMoreClick(arg) {
            _this.handleMoreLinkClick(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, arg), {
              fromRow: row
            }));
          }
        });
      }))), !props.forPrint && morePopoverState && morePopoverState.currentFgEventSegs === props.fgEventSegs && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MorePopover, {
        ref: _this.morePopoverRef,
        date: morePopoverState.date,
        dateProfile: dateProfile,
        segs: morePopoverState.allSegs,
        alignmentEl: morePopoverState.dayEl,
        topAlignmentEl: rowCnt === 1 ? props.headerAlignElRef.current : null,
        onCloseClick: _this.handleMorePopoverClose,
        selectedInstanceId: props.eventSelection,
        hiddenInstances: // yuck
        (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {},
        todayRange: todayRange
      }));
    }));
  }; // Hit System
  // ----------------------------------------------------------------------------------------------------


  Table.prototype.prepareHits = function () {
    this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootEl, this.rowRefs.collect().map(function (rowObj) {
      return rowObj.getCellEls()[0];
    }), // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["PositionCache"](this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
    true, // horizontal
    false);
  };

  Table.prototype.positionToHit = function (leftPosition, topPosition) {
    var morePopover = this.morePopoverRef.current;
    var morePopoverHit = morePopover ? morePopover.positionToHit(leftPosition, topPosition, this.rootEl) : null;
    var morePopoverState = this.state.morePopoverState;

    if (morePopoverHit) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        row: morePopoverState.fromRow,
        col: morePopoverState.fromCol
      }, morePopoverHit);
    }

    var _a = this,
        colPositions = _a.colPositions,
        rowPositions = _a.rowPositions;

    var col = colPositions.leftToIndex(leftPosition);
    var row = rowPositions.topToIndex(topPosition);

    if (row != null && col != null) {
      return {
        row: row,
        col: col,
        dateSpan: {
          range: this.getCellRange(row, col),
          allDay: true
        },
        dayEl: this.getCellEl(row, col),
        relativeRect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        }
      };
    }

    return null;
  };

  Table.prototype.getCellEl = function (row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  };

  Table.prototype.getCellRange = function (row, col) {
    var start = this.props.cells[row][col].date;
    var end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addDays"])(start, 1);
    return {
      start: start,
      end: end
    };
  };

  return Table;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

function buildBuildMoreLinkText(moreLinkTextInput) {
  if (typeof moreLinkTextInput === 'function') {
    return moreLinkTextInput;
  }

  return function (num) {
    return "+" + num + " " + moreLinkTextInput;
  };
}

function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}

var DayTableSlicer =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTableSlicer, _super);

  function DayTableSlicer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.forceDayIfListItem = true;
    return _this;
  }

  DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  };

  return DayTableSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["Slicer"]);

var DayTable =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTable, _super);

  function DayTable() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.slicer = new DayTableSlicer();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();

    _this.handleRootEl = function (rootEl) {
      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  DayTable.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Table, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
      ref: this.tableRef,
      elRef: this.handleRootEl
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  };

  DayTable.prototype.prepareHits = function () {
    this.tableRef.current.prepareHits();
  };

  DayTable.prototype.queryHit = function (positionLeft, positionTop) {
    var rawHit = this.tableRef.current.positionToHit(positionLeft, positionTop);

    if (rawHit) {
      return {
        component: this,
        dateSpan: rawHit.dateSpan,
        dayEl: rawHit.dayEl,
        rect: {
          left: rawHit.relativeRect.left,
          right: rawHit.relativeRect.right,
          top: rawHit.relativeRect.top,
          bottom: rawHit.relativeRect.bottom
        },
        layer: 0
      };
    }

    return null;
  };

  return DayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateComponent"]);

var DayTableView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(DayTableView, _super);

  function DayTableView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildDayTableModel = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["memoize"])(buildDayTableModel);
    _this.headerRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    _this.tableRef = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createRef"])();
    return _this;
  }

  DayTableView.prototype.render = function () {
    var _this = this;

    var _a = this.context,
        options = _a.options,
        dateProfileGenerator = _a.dateProfileGenerator;
    var props = this.props;
    var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    var headerContent = options.dayHeaders && Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayHeader"], {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });

    var bodyContent = function bodyContent(contentArg) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createElement"])(DayTable, {
        ref: _this.tableRef,
        dateProfile: props.dateProfile,
        dayTableModel: dayTableModel,
        businessHours: props.businessHours,
        dateSelection: props.dateSelection,
        eventStore: props.eventStore,
        eventUiBases: props.eventUiBases,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        nextDayThreshold: options.nextDayThreshold,
        colGroupNode: contentArg.tableColGroupNode,
        tableMinWidth: contentArg.tableMinWidth,
        dayMaxEvents: options.dayMaxEvents,
        dayMaxEventRows: options.dayMaxEventRows,
        showWeekNumbers: options.weekNumbers,
        expandRows: !props.isHeightAuto,
        headerAlignElRef: _this.headerElRef,
        clientWidth: contentArg.clientWidth,
        clientHeight: contentArg.clientHeight,
        forPrint: props.forPrint
      });
    };

    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  };

  return DayTableView;
}(TableView);

function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DaySeriesModel"](dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DayTableModel"](daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(TableDateProfileGenerator, _super);

  function TableDateProfileGenerator() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // Computes the date range that will be rendered.


  TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    var dateEnv = this.props.dateEnv;

    var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);

    var start = renderRange.start;
    var end = renderRange.end;
    var endOfWeek; // year and month views should be aligned with weeks. this is already done for week

    if (/^(year|month)$/.test(currentRangeUnit)) {
      start = dateEnv.startOfWeek(start); // make end-of-week if not already

      endOfWeek = dateEnv.startOfWeek(end);

      if (endOfWeek.valueOf() !== end.valueOf()) {
        end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addWeeks"])(endOfWeek, 1);
      }
    } // ensure 6 weeks


    if (this.props.monthMode && this.props.fixedWeekCount) {
      var rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["diffWeeks"])(start, end));
      end = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["addWeeks"])(end, 6 - rowCnt);
    }

    return {
      start: start,
      end: end
    };
  };

  return TableDateProfileGenerator;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["DateProfileGenerator"]);

var OPTION_REFINERS = {
  moreLinkClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"],
  moreLinkWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["identity"]
};
var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
  initialView: 'dayGridMonth',
  optionRefiners: OPTION_REFINERS,
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      monthMode: true,
      fixedWeekCount: true
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        //console.log(this.auth.isAuthenticated());
        if (!this.auth.isAuthenticated()) {
            //alert("HI")
            this.router.navigate(["/login"]);
            //this.router.navigate(['/dashboard']);  
        }
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Qd8X":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Simple Table</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead class=\"\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td>\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td>\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td>\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td>\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td>\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td>\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <!-- <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div> -->\n                              <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" type=\"email\" disabled>\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Special notes\"></textarea>\n                                 </mat-form-field>\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-2\">\n              <!-- <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"javascript:void(0)\">\n                          <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div> -->\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Up/L":
/*!*****************************************************!*\
  !*** ./src/app/admin/patient/patient.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;    \r\n  }\r\n  \r\n \r\n .btnCenter{\r\n    margin-top: 10px;\r\n    margin-bottom: -20px;\r\n }\r\n  \r\n \r\n .bgColor{  \r\n   color: #0047AB;\r\n }\r\n  \r\n \r\n .fontSizeBold{\r\n   font-size: large;\r\n   /* font-weight: bold; */\r\n }\r\n  \r\n \r\n .ModelPopUpClass{\r\n   background-color: grey;width: 980px;\r\n }\r\n  \r\n \r\n .Tableclass th {\r\n  /* background-color: black; */\r\n  border: 1px solid #ddd;\r\n  font-size: medium;\r\n  color:black;\r\n  padding-left: 10px;\r\n  background-color: slategrey;\r\n }\r\n  \r\n \r\n .Tableclass td{\r\n  border: 1px solid #ddd;\r\n  /* text-align: center; */\r\n  /* margin-left: 10px; */\r\n  color: black;\r\n  padding-left: 10px;\r\n }\r\n  \r\n \r\n .modalTagReg{\r\n  margin-left: -84px;\r\n  text-align: center;\r\n }\r\n  \r\n \r\n .person_pin {\r\n  width: 80px;\r\n  margin-left: 0px;\r\n }\r\n  \r\n \r\n .avatar{\r\n  float: left;\r\n  padding: 4px;\r\n }\r\n  \r\n \r\n .ViewPoptable td, th{\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n }\r\n  \r\n \r\n .avatar1{\r\n  width: 20%;\r\n}\r\n  \r\n \r\n .avatar2{\r\n  width: 80%;\r\n  padding-top: 15px;    \r\n}\r\n  \r\n \r\n .wd27{\r\nwidth: 33%;\r\n}\r\n  \r\n \r\n .wd73{\r\n  width: 69%;\r\n}\r\n \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7OztDQUdEO0lBQ0csZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7O0NBQ0E7R0FDRSxjQUFjO0NBQ2hCOzs7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQix1QkFBdUI7Q0FDekI7OztDQUNBO0dBQ0Usc0JBQXNCLENBQUMsWUFBWTtDQUNyQzs7O0NBQ0E7RUFDQyw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtDQUM1Qjs7O0NBQ0E7RUFDQyxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0NBQ25COzs7Q0FDQTtFQUNDLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7OztDQUNBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjs7O0NBQ0E7RUFDQyxXQUFXO0VBQ1gsWUFBWTtDQUNiOzs7Q0FFQTtFQUNDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOzs7Q0FDQTtFQUNDLFVBQVU7QUFDWjs7O0NBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COzs7Q0FDQTtBQUNBLFVBQVU7QUFDVjs7O0NBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYXRpZW50L3BhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICB9XHJcbiAgXHJcbiBcclxuIC5idG5DZW50ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiB9XHJcbiAuYmdDb2xvcnsgIFxyXG4gICBjb2xvcjogIzAwNDdBQjtcclxuIH1cclxuIC5mb250U2l6ZUJvbGR7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gfVxyXG4gLk1vZGVsUG9wVXBDbGFzc3tcclxuICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTt3aWR0aDogOTgwcHg7XHJcbiB9XHJcbiAuVGFibGVjbGFzcyB0aCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBjb2xvcjpibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmV5O1xyXG4gfVxyXG4gLlRhYmxlY2xhc3MgdGR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuIH1cclxuIC5tb2RhbFRhZ1JlZ3tcclxuICBtYXJnaW4tbGVmdDogLTg0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLnBlcnNvbl9waW4ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiB9XHJcbiAuYXZhdGFye1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuIH1cclxuIFxyXG4gLlZpZXdQb3B0YWJsZSB0ZCwgdGh7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuIH1cclxuIC5hdmF0YXIxe1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuLmF2YXRhcjJ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nLXRvcDogMTVweDsgICAgXHJcbn1cclxuLndkMjd7XHJcbndpZHRoOiAzMyU7XHJcbn1cclxuLndkNzN7XHJcbiAgd2lkdGg6IDY5JTtcclxufVxyXG4gXHJcbiAiXX0= */");

/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VUUB":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/doctor/doctor.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"divclass\">\r\n          <div class=\"form-group\">\r\n            <table class=\"\" [ngClass]=\"{'btnCenter': true}\">\r\n                <th>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                  <mat-form-field class=\"example-form-field\">\r\n                    <input matInput type=\"text\" [(ngModel)]=\"value\" (keyup)=\"applyFilter()\" placeholder=\"Search here...\">\r\n                  </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-8 text-right\">\r\n                  <button class=\"btn btn-primary btn-outline-primary\"  (click)=\"open(content)\" value=\"Add\"><i class=\"material-icons\">person_add</i><span>&nbsp;&nbsp;Add New</span></button>\r\n                </div>\r\n                  </div>\r\n                </th>\r\n            </table>\r\n          </div>\r\n          <div class=\"form-group example-container mat-elevation-z8\">\r\n            <mat-table mat-table [dataSource]=\"datasource\" class=\"\" matSort>\r\n                <ng-container matColumnDef=\"Id\" style=\"width:8%\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> ID </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.doctorDisplayId}} </mat-cell>\r\n                  <!-- <th mat-cell mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Doctor ID. </th>\r\n                  <td *matCellDef=\"let element\"> {{element.doctorDisplayId}} </td> -->\r\n                </ng-container>  \r\n                <ng-container matColumnDef=\"FullName\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Full Name </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.firstName}}  {{element.lastName}}</td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> Full Name </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.firstName}}  {{row.lastName}} </mat-cell>\r\n                </ng-container>  \r\n                <ng-container matColumnDef=\"dob\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Date of Birth </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.dob | date: 'dd-MM-yyyy'}} </td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> Date of Birth </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{row.dob | date: 'dd-MM-yyyy'}} </mat-cell>\r\n                </ng-container>  \r\n                <ng-container matColumnDef=\"EmailID\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> EmailID </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.emailId}} </td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> Email Id </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{ row.emailId }} </mat-cell>\r\n                </ng-container> \r\n                <ng-container matColumnDef=\"Age\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Age </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> Age </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{ row.age }} </mat-cell>\r\n                </ng-container>  \r\n                <ng-container matColumnDef=\"Gender\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Gender </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.gender=='M' ? 'Male': element.gender=='F'?'Female':'Other'}} </td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header class=\"\"> Gender </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{ row.gender=='M' ? 'Male' : row.gender=='F'? 'Female': 'Other' }} </mat-cell>\r\n                </ng-container>  \r\n                <!-- <ng-container matColumnDef=\"Specialties\">\r\n                  <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Specialties </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.Specialties}} </td>\r\n                </ng-container>-->\r\n                <ng-container matColumnDef=\"Status\">\r\n                  <!-- <th mat-header-cell *matHeaderCellDef [ngClass]=\"{'fontSizeBold': true}\"> Status </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.isActive == true? 'Active': 'Inactive' }} </td> -->\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row\"> {{ row.isActive == true? 'Active': 'Inactive' }} </mat-cell>\r\n                </ng-container> \r\n                <ng-container matColumnDef=\"Blocked_Unblocked\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Is Locked </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.Blocked_Unblocked}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"View_Edit_Delete\" style=\"min-width: fit-content;\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\">\r\n                      <button class=\"btn btn-outline-primary\" (click)=\"Open(Viewcontent,element.id)\"  title=\"View\"><mat-icon>visibility</mat-icon></button>\r\n                      <button class=\"btn btn-outline-primary\" (click)=\"Editopen(Editcontent,element.id )\"   title=\"Edit\"><mat-icon>edit</mat-icon></button>\r\n                      <button class=\"btn btn-outline-primary\" (click)=\"Deleteopen(Deletecontent,element.id )\" title=\"Delete\"><mat-icon>delete</mat-icon></button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n              </mat-table>\r\n            </div>   \r\n            <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" style=\"color: #0047AB; font-size: small;\">\r\n            </mat-paginator>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"modal modal-angular fade\" id=\"viewM\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"UserData\">\r\n          <div class=\"modal-dialog\" role=\"document\" >\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-body text-center\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                      <form >    \r\n                        <div class=\"main main-raised\" >\r\n                          <div class=\"profile-content\">\r\n                            <div class=\"container\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                  <div class=\"profile\" >\r\n                                    <div class=\"avatar avatar1\" style=\"text-align: center;float: none;\">\r\n                                      <img src=\"../../../assets/img/UserProfileIcon.webp\" alt=\"Circle Image\" class=\"img-raised rounded-circle\" [ngClass]=\"{'person_pin': true}\">\r\n                                    </div>\r\n                                    <div class=\"avatar avatar2\" style=\"width:100%\">\r\n                                      <table style=\"margin:auto;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\r\n                                        <tr>\r\n                                          <th class=\"wd27\">Name</th>\r\n                                          <th class=\"wd73\"><h4 class=\"title\">{{UserData.firstName}} {{UserData.lastName}}</h4></th>                          \r\n                                        </tr>\r\n                                        <tr>\r\n                                          <th>Specialties</th>\r\n                                          <td><h4>{{UserData.Specialties==null?'Surgeon':UserData.Specialties}}</h4></td>\r\n                                        </tr>\r\n                                        </table>\r\n                                    </div>                   \r\n                                  </div>\r\n                                  <div class=\"name\">                      \r\n                                    <!-- <hr/> -->\r\n                                    <table class=\"table table-hover\" style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\r\n                                      <tr>\r\n                                        <td>Date of Birth</td>\r\n                                        <td>{{UserData.dob | date:'dd-MM-yyyy'}}</td>                          \r\n                                      </tr>\r\n                                      <tr>\r\n                                        <td>Email Id</td>\r\n                                        <td>{{UserData.emailId}}</td>\r\n                                      </tr>\r\n                                      <tr>\r\n                                        <td>Status</td>\r\n                                        <td>{{UserData.Status==null?'Active':'Inactive'}}</td>\r\n                                      </tr>                        \r\n                                    </table>                    \r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </form>\r\n                    </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modalTagReg\">\r\n          \r\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\" >    \r\n              <div class=\"modal-body\" >\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n              </button>\r\n              <app-register (parentFun)=\"receiveMessage()\" [userrole]=\"Doctor\" ></app-register>\r\n             </div> \r\n          </ng-template>\r\n          <!-- Register PopUp -->\r\n        \r\n         <!-- View By ID PopUp -->\r\n         <ng-template #Viewcontent let-modal>\r\n          <div class=\"modal-header\" *ngIf=\"UserData\" style=\"text-align: center !important\">\r\n            <div class=\"row\" style=\"width: 100%;\">\r\n              <div class=\"col\"></div>\r\n              <div class=\"col text-center\"><h3 >User id:  {{UserData.doctorDisplayId}} </h3></div>\r\n              <div class=\"col\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n              <span aria-hidden=\"true\">&times;</span></button>\r\n            </div>\r\n          </div>\r\n            \r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <!-- <h2 style=\"text-align: center;\">User id:  {{UserData.id}} </h2> -->\r\n              <form >    \r\n                <div class=\"main main-raised\" >\r\n                  <div class=\"profile-content\">\r\n                    <div class=\"container\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12 ml-auto mr-auto\">\r\n                          <div class=\"profile\" >\r\n                            <div class=\"avatar avatar1\" style=\"text-align: center;float: none;\">\r\n                              <img src=\"../../../assets/img/UserProfileIcon.webp\" alt=\"Circle Image\" class=\"img-raised rounded-circle\" [ngClass]=\"{'person_pin': true}\">\r\n                            </div>\r\n                            <div class=\"avatar avatar2\" style=\"width:100%\">\r\n                              <table style=\"margin:auto;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\r\n                                \r\n                                </table>\r\n                            </div>                   \r\n                          </div>\r\n                          <div class=\"name\">                      \r\n                            <!-- <hr/> -->\r\n                            <table class=\"table table-hover\" style=\"font-family: arial, sans-serif;border-collapse: collapse; width: 100%;\" [ngClass]=\"{'ViewPoptable': true}\">\r\n                              <tr>\r\n                                <th class=\"wd27\">Name</th>\r\n                                <th class=\"wd73\"><h4 class=\"title\">{{UserData.firstName}} {{UserData.lastName}}</h4></th>                          \r\n                              </tr>\r\n                              <tr>\r\n                                <th>Specialties</th>\r\n                                <td><h4>{{UserData.Specialties==null?'Surgeon':UserData.Specialties}}</h4></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Date of Birth</td>\r\n                                <td>{{UserData.dob | date:'dd-MM-yyyy'}}</td>                          \r\n                              </tr>\r\n                              <tr>\r\n                                <td>Email Id</td>\r\n                                <td>{{UserData.emailId}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Status</td>\r\n                                <td>{{UserData.Status==null?'Active':'Inactive'}}</td>\r\n                              </tr>                        \r\n                            </table>                    \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <!-- <button type=\"button\" class=\"btn btn-outline\" (click)=\"modal.close('Save click')\">Save</button> -->\r\n          </div>\r\n        </ng-template>\r\n          <!-- View By ID PopUp -->\r\n        \r\n          <!-- Edit By ID PopUp -->  \r\n          <ng-template #Editcontent let-c=\"close\" let-d=\"dismiss\" >    \r\n            <div class=\"modal-body\" >\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times; &nbsp;</span>\r\n              </button>\r\n              <app-register (parentFun)=\"receiveMessage()\" [drId]=\"DrIdToUpdate\" [userData]=\"UserData\"></app-register>\r\n             </div> \r\n          </ng-template>\r\n          <!-- Edit By ID PopUp -->\r\n        \r\n           <!-- Delete By ID PopUp -->  \r\n          <ng-template #Deletecontent let-modal>\r\n            <div class=\"modal-header\" *ngIf=\"UserData\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\" >\r\n              <h3>Are you sure you want to delete the user:</h3> <h4><b>{{UserData.firstName}} {{UserData.lastName}}</b></h4>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"SoftDeleteDoctorData(item.id)\" title=\"Delete\">Delete</button>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modal.close('Save click')\" title=\"Cancel\">Cancel</button>\r\n            </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Vbv9":
/*!***************************************************!*\
  !*** ./src/app/admin/doctor/doctor.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n  overflow:hidden;\r\n}\r\n\r\n.divclass{\r\n   padding-left: 20px;\r\n   padding-right: 20px;\r\n}\r\n\r\n.btnCenter{\r\n  margin-top: 10px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.bgColorAdd{  \r\n  /* color: #0047AB; */\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.bgColorAdd:hover{  \r\n  /* color: black; */\r\n  /* font-size: x-large; */\r\n  /* font-weight: 400; */\r\n  width: 55px;\r\n  height: 55px;\r\n  overflow: hidden;\r\n}\r\n\r\n.fontSizeBold{\r\n  font-size: large;\r\n  /* font-weight: bold; */\r\n}\r\n\r\n.ModelPopUpClass{\r\n  background-color: grey;width: 980px;\r\n}\r\n\r\n.Tableclass th {\r\n /* background-color: black; */\r\n border: 1px solid #ddd;\r\n font-size: medium;\r\n color: #000;\r\n padding-left: 10px;\r\n background-color: slategray;\r\n}\r\n\r\n.Tableclass td{\r\n border: 1px solid #ddd;\r\n /* text-align: center; */\r\n /* margin-left: 10px; */\r\n color: black;\r\n padding-left: 10px;\r\n}\r\n\r\n.modalTagReg{\r\n margin-left: -84px;\r\n text-align: center;\r\n}\r\n\r\n.person_pin {\r\n width: 80px;\r\n margin-left: 0px;\r\n}\r\n\r\n.avatar{\r\n float: left;\r\n padding: 2px;\r\n}\r\n\r\n.ViewPoptable td, th{\r\n border: 1px solid #dddddd;\r\n text-align: left;\r\n padding: 8px;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 80px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 12px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.mat-header-cell{\r\n  font-size: 14px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.mat-column-Id {\r\n  width: 8% !important;\r\n  flex: 0 0 8% !important;\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  \r\n  \r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n\r\n  word-break: break-word;\r\n  \r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-table thead th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid ;\r\n}\r\n\r\n.mat-column-dob{\r\n  width: 10% !important;\r\n  flex: 0 0 10% !important;\r\n}\r\n\r\n.mat-column-Age{\r\n  width: 5% !important;\r\n  flex: 0 0 5% !important;\r\n}\r\n\r\n.mat-column-Gender{\r\n  width: 6% !important;\r\n  flex: 0 0 6% !important;\r\n}\r\n\r\n.cdk-column-Status{\r\n  width: 6% !important;\r\n  flex: 0 0 6% !important;\r\n}\r\n\r\n.mat-column-FullName{\r\n  width: 20% !important;\r\n  flex: 0 0 20% !important;\r\n}\r\n\r\n.mat-column-EmailID{\r\n  width: 20% !important;\r\n  flex: 0 0 20% !important;\r\n}\r\n\r\n.divclass{\r\n  overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsbUJBQW1CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usc0JBQXNCLENBQUMsWUFBWTtBQUNyQzs7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsMkJBQTJCO0FBQzVCOztBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4Qix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7RUFDZiw0REFBNEQ7QUFDOUQ7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyw2QkFBNkI7OztFQUc3Qix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kb2N0b3IvZG9jdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uZGl2Y2xhc3N7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bkNlbnRlcntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG59XHJcbi5iZ0NvbG9yQWRkeyAgXHJcbiAgLyogY29sb3I6ICMwMDQ3QUI7ICovXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5iZ0NvbG9yQWRkOmhvdmVyeyAgXHJcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gIC8qIGZvbnQtc2l6ZTogeC1sYXJnZTsgKi9cclxuICAvKiBmb250LXdlaWdodDogNDAwOyAqL1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mb250U2l6ZUJvbGR7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG4uTW9kZWxQb3BVcENsYXNze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7d2lkdGg6IDk4MHB4O1xyXG59XHJcbi5UYWJsZWNsYXNzIHRoIHtcclxuIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gY29sb3I6ICMwMDA7XHJcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XHJcbn1cclxuLlRhYmxlY2xhc3MgdGR7XHJcbiBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXHJcbiBjb2xvcjogYmxhY2s7XHJcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1vZGFsVGFnUmVne1xyXG4gbWFyZ2luLWxlZnQ6IC04NHB4O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wZXJzb25fcGluIHtcclxuIHdpZHRoOiA4MHB4O1xyXG4gbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uYXZhdGFye1xyXG4gZmxvYXQ6IGxlZnQ7XHJcbiBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5WaWV3UG9wdGFibGUgdGQsIHRoe1xyXG4gYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogODBweDtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gXHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ubWF0LWNvbHVtbi1JZCB7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgXHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcbi5tYXQtdGFibGUgdGhlYWQgdGgge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIDtcclxufVxyXG4ubWF0LWNvbHVtbi1kb2J7XHJcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNvbHVtbi1BZ2V7XHJcbiAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jb2x1bW4tR2VuZGVye1xyXG4gIHdpZHRoOiA2JSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA2JSAhaW1wb3J0YW50O1xyXG59XHJcbi5jZGstY29sdW1uLVN0YXR1c3tcclxuICB3aWR0aDogNiUgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgNiUgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNvbHVtbi1GdWxsTmFtZXtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY29sdW1uLUVtYWlsSUR7XHJcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcclxufVxyXG4uZGl2Y2xhc3N7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "XOEH":
/*!****************************************************!*\
  !*** ./src/app/admin/patient/patient.component.ts ***!
  \****************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _raw_loader_patient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./patient.component.html */ "He/r");
/* harmony import */ var _patient_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient.component.css */ "Up/L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/register.service */ "mdPV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as data from '../../../assets/jsonData/AllUserdata.json';





var PatientComponent = /** @class */ (function () {
    function PatientComponent(config, modalService, registerService, toaster) {
        this.modalService = modalService;
        this.registerService = registerService;
        this.toaster = toaster;
        this.value = '';
        this.PatientData = [];
        this.dataSourcePatientData = [];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataSourcePatientData);
        //Ng mat-table columns
        this.displayedColumns = [
            'PatientID',
            'FullName',
            'DOB',
            'EmailID',
            'ContactNo',
            'Status',
            'Blocked_Unblocked',
            'View_Edit_Delete'
        ];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    PatientComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
        }
    };
    PatientComponent.prototype.Getjson = function () {
        var _this = this;
        this.ob = this.registerService.GetPatientJsonDatas();
        this.ob.subscribe(function (data) {
            console.log("Output");
            console.log(data);
            _this.PatientData = data;
            _this.dataSourcePatientData = data;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.dataSourcePatientData);
        }, function (error) { return console.log("Error in saving regiter data"); });
        this.dataSourcePatient = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.PatientData);
        console.log("Data Source: " + this.PatientData);
    };
    // View by Id function
    PatientComponent.prototype.GetdataById = function (id) {
        var _this = this;
        this.ob = this.registerService.GetPatientJsonDatasByID(id);
        this.ob.subscribe(function (data) { _this.UserData = data; console.log(data); });
        // console.log("USerdata : "+this.UserData.id);
    };
    // Delete by Id function
    PatientComponent.prototype.DeletedataById = function (id) {
        var _this = this;
        this.ob = this.registerService.DeletePatientJsonDatasByID(id);
        this.ob.subscribe(function (data) { _this.DeleteUserData = data; });
        console.log("DeleteUserData : " + this.DeleteUserData.id);
    };
    PatientComponent.prototype.applyFilter = function () {
        var _this = this;
        //debugger;
        console.log(this.value);
        if (this.value != '') {
            this.dataSourcePatientData = this.PatientData.filter(function (p) { return p.fullName.includes(_this.value); });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.PatientData.filter(function (p) { return p.fullName.toUpperCase().includes(_this.value.toUpperCase()); }));
        }
        else {
            this.dataSourcePatientData = this.PatientData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.PatientData);
        }
        console.log(this.PatientData);
    };
    // Ng Pop Up Model
    PatientComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
    };
    PatientComponent.prototype.Viewopen = function (Viewcontent, id) {
        this.modalService.open(Viewcontent, { size: 'md', centered: true, scrollable: false });
        this.GetdataById(id);
    };
    PatientComponent.prototype.Deleteopen = function (Deletecontent, id) {
        this.modalService.open(Deletecontent, { size: 'md', centered: true, scrollable: true });
        this.GetdataById(id);
        // this.DeletedataById(id);
    };
    PatientComponent.prototype.Editopen = function (Editcontent, id) {
        this.modalService.open(Editcontent, { size: 'md', centered: true, scrollable: true });
        // this.GetdataById(id);
    };
    PatientComponent.prototype.SoftDeletePatientData = function (patientId) {
        var _this = this;
        //debugger;
        this.modalService.dismissAll();
        console.log("ts.SoftDeletePatientData() hits");
        var obj = {};
        obj.id = patientId,
            obj.status = "InActive";
        this.ob = this.registerService.SoftDeletePatienData(obj);
        this.ob.subscribe(function (dataa) {
            console.log(dataa);
            if (dataa != null) {
                _this.success = true;
                _this.toaster.success("Success", "Patient Deleted.", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, _this.functioncallbackFunction);
            }
        }, function (error) { return console.log("Error in deleteing patient data"); });
    };
    PatientComponent.prototype.functioncallbackFunction = function () {
        this.success = true;
    };
    PatientComponent.prototype.ngOnInit = function () {
        this.Getjson();
        this.dataSource.paginator = this.paginator;
    };
    PatientComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
    ]; };
    PatientComponent.propDecorators = {
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"],] }]
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient',
            template: _raw_loader_patient_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]],
            styles: [_patient_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C");
/* harmony import */ var _upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.component.css */ "NL5l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upgrade',
            template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "d5D1":
/*!*************************************************!*\
  !*** ./src/app/admin/nurse/nurse.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;    \r\n  }\r\n  \r\n  .bgColorAdd{  \r\n    color: #0047AB;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .bgColor{  \r\n    color: #0047AB;\r\n  }\r\n  \r\n  .bgColorAdd:hover{  \r\n    width: 55px;\r\n    height: 55px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .btnCenter{\r\n    margin-top: 10px;\r\n    margin-bottom: -20px;\r\n  }\r\n  \r\n  .fontSizeBold{\r\n   font-size: large;\r\n }\r\n  \r\n  .ModelPopUpClass{\r\n   background-color: grey;width: 980px;\r\n }\r\n  \r\n  .Tableclass th {\r\n  border: 1px solid #ddd;\r\n  font-size: medium;\r\n  color: #000;\r\n  padding-left: 10px;\r\n  background-color: slategray;\r\n }\r\n  \r\n  .Tableclass td{\r\n  border: 1px solid #ddd;\r\n  color: black;\r\n  padding-left: 10px;\r\n }\r\n  \r\n  .modalTagReg{\r\n  margin-left: -84px;\r\n  text-align: center;\r\n }\r\n  \r\n  .person_pin {\r\n  width: 80px;\r\n  margin-left: 0px;\r\n }\r\n  \r\n  .avatar{\r\n  float: left;\r\n  padding: 4px;\r\n }\r\n  \r\n  .ViewPoptable td, th{\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 2px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbnVyc2UvbnVyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUNBO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtHQUNDLGdCQUFnQjtDQUNsQjs7RUFDQTtHQUNFLHNCQUFzQixDQUFDLFlBQVk7Q0FDckM7O0VBQ0E7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0NBQzVCOztFQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7O0VBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25COztFQUNBO0VBQ0MsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjs7RUFDQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0VBRUE7RUFDQyx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL251cnNlL251cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5iZ0NvbG9yQWRkeyAgXHJcbiAgICBjb2xvcjogIzAwNDdBQjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuYmdDb2xvcnsgIFxyXG4gICAgY29sb3I6ICMwMDQ3QUI7XHJcbiAgfVxyXG4gIC5iZ0NvbG9yQWRkOmhvdmVyeyAgXHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5idG5DZW50ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb250U2l6ZUJvbGR7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiB9XHJcbiAuTW9kZWxQb3BVcENsYXNze1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O3dpZHRoOiA5ODBweDtcclxuIH1cclxuIC5UYWJsZWNsYXNzIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XHJcbiB9XHJcbiAuVGFibGVjbGFzcyB0ZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiB9XHJcbiAubW9kYWxUYWdSZWd7XHJcbiAgbWFyZ2luLWxlZnQ6IC04NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIC5wZXJzb25fcGluIHtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gfVxyXG4gLmF2YXRhcntcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiB9XHJcbiBcclxuIC5WaWV3UG9wdGFibGUgdGQsIHRoe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiB9Il19 */");

/***/ }),

/***/ "jxfC":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "mdPV":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "P8On");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterService = /** @class */ (function (_super) {
    __extends(RegisterService, _super);
    // constructor()  { }
    function RegisterService(httpSVC, config) {
        var _this = _super.call(this) || this;
        _this.httpSVC = httpSVC;
        _this.config = config;
        return _this;
    }
    RegisterService.prototype.SaveUserRegiterDatas = function (reg, operation) {
        console.log("service.SavePractitionerData() hits");
        var headers = { 'content-type': 'application/json' };
        if (operation === "POST") {
            //if(reg.role=='Doctor')  
            //return this.httpSVC.post<Register>( this.config.tempResourseAPI+ "/Doctors", JSON.stringify(reg),{'headers':headers});
            return this.httpSVC.post(this.config.authApiURI + "/doctor", reg).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
            //else if(reg.role=='Nurse')
            //  return this.httpSVC.post<Register>(this.config.tempResourseAPI+"/Nurses", JSON.stringify(reg),{'headers':headers});
        }
        else {
            if (reg.role == 'Doctor')
                return this.httpSVC.patch(this.config.tempResourseAPI + "/Doctors/" + reg.id, JSON.stringify(reg), { 'headers': headers });
            else if (reg.role == 'Nurse')
                return this.httpSVC.patch(this.config.tempResourseAPI + "/Nurses/" + reg.id, JSON.stringify(reg), { 'headers': headers });
        }
    };
    //http://localhost:3000/Doctor?DrID=102
    RegisterService.prototype.GetDoctorJsonDatas = function () {
        return this.httpSVC.get(this.config.adminApiUri + "/Doctors");
    };
    RegisterService.prototype.GetNurseJsonDatas = function () {
        //return this.httpSVC.get<Nurse>(this.config.tempResourseAPI + "/Nurses");
        return this.httpSVC.get(this.config.adminApiUri + "/Nurses");
    };
    RegisterService.prototype.GetPatientJsonDatas = function () {
        //return this.httpSVC.get<Patients>(this.config.tempResourseAPI+ "/Patient");
        return this.httpSVC.get(this.config.adminApiUri + "/Patients");
    };
    // Get data by Id
    RegisterService.prototype.GetDoctorJsonDatasByID = function (DrID) {
        // return this.httpSVC.get<Doctor>("http://localhost:3000/Doctors?id="+DrID);
        return this.httpSVC.get(this.config.adminApiUri + "/Doctor/" + DrID);
    };
    RegisterService.prototype.GetNurseJsonDatasByID = function (NurseID) {
        // return this.httpSVC.get<Nurse>("http://localhost:3000/Nurses?id="+NurseID);
        return this.httpSVC.get(this.config.tempResourseAPI + "/Nurses?id=" + NurseID);
    };
    RegisterService.prototype.GetPatientJsonDatasByID = function (PatientID) {
        // return this.httpSVC.get<Patient>("http://localhost:3000/Patients?id="+PatientID);
        return this.httpSVC.get(this.config.tempResourseAPI + "/Patient?id=" + PatientID);
    };
    // private handleError(error: any)
    // {
    //   console.error(error);                                       //Created a function to handle and log errors, in case
    //   return throwError(error);
    // }
    // Delete data by Id
    RegisterService.prototype.DeleteDoctorJsonDatasByID = function (DrID) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json').set('Accept', 'application/json');
        var httpOptions = {
            headers: this.headers
        };
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Doctors/" + DrID, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RegisterService.prototype.DeleteNurseJsonDatasByID = function (NurseID) {
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Nurses/" + NurseID);
    };
    RegisterService.prototype.DeletePatientJsonDatasByID = function (PatientID) {
        return this.httpSVC.delete(this.config.tempResourseAPI + "/Patient/" + PatientID);
    };
    // Get Appointment JsonData
    RegisterService.prototype.GetAppointmentJsonData = function () {
        return this.httpSVC.get(this.config.tempResourseAPI + "/Appointment");
    };
    RegisterService.prototype.SoftDeleteNurseData = function (p) {
        console.log("service.SoftDeleteNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpSVC.patch("http://localhost:3000/Nurses/" + p.id, JSON.stringify(p), { 'headers': headers });
    };
    RegisterService.prototype.SoftDeleteDoctorData = function (p) {
        console.log("service.SoftDeleteNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpSVC.patch("http://localhost:3000/Doctors/" + p.id, JSON.stringify(p), { 'headers': headers });
    };
    //Update IsActive in PatientJson for Delete opertion
    RegisterService.prototype.SoftDeletePatienData = function (p) {
        console.log("service.SoftDeletePatienData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpSVC.patch("http://localhost:3000/Patient/" + p.id, JSON.stringify(p), { 'headers': headers });
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], RegisterService);
    return RegisterService;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "njyG":
/*!***************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "/iSe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "HO/X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */

/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */



/***/ }),

/***/ "ogxq":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.js ***!
  \********************************************************/
/*! exports provided: default, Draggable, FeaturefulElementDragging, PointerDragging, ThirdPartyDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ExternalDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturefulElementDragging", function() { return FeaturefulElementDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerDragging", function() { return PointerDragging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyDraggable", function() { return ThirdPartyDraggable; });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ "1hAE");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "xf22");
/*!
FullCalendar v5.5.0
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/


_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/

var PointerDragging =
/** @class */
function () {
  function PointerDragging(containerEl) {
    var _this = this;

    this.subjectEl = null; // options that can be directly assigned by caller

    this.selector = ''; // will cause subjectEl in all emitted events to be this element

    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states

    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false; // Mouse
    // ----------------------------------------------------------------------------------------------------

    this.handleMouseDown = function (ev) {
      if (!_this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && _this.tryStart(ev)) {
        var pev = _this.createEventFromMouse(ev, true);

        _this.emitter.trigger('pointerdown', pev);

        _this.initScrollWatch(pev);

        if (!_this.shouldIgnoreMove) {
          document.addEventListener('mousemove', _this.handleMouseMove);
        }

        document.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    this.handleMouseMove = function (ev) {
      var pev = _this.createEventFromMouse(ev);

      _this.recordCoords(pev);

      _this.emitter.trigger('pointermove', pev);
    };

    this.handleMouseUp = function (ev) {
      document.removeEventListener('mousemove', _this.handleMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseUp);

      _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));

      _this.cleanup(); // call last so that pointerup has access to props

    }; // Touch
    // ----------------------------------------------------------------------------------------------------


    this.handleTouchStart = function (ev) {
      if (_this.tryStart(ev)) {
        _this.isTouchDragging = true;

        var pev = _this.createEventFromTouch(ev, true);

        _this.emitter.trigger('pointerdown', pev);

        _this.initScrollWatch(pev); // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014


        var targetEl = ev.target;

        if (!_this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', _this.handleTouchMove);
        }

        targetEl.addEventListener('touchend', _this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342

        window.addEventListener('scroll', _this.handleTouchScroll, true);
      }
    };

    this.handleTouchMove = function (ev) {
      var pev = _this.createEventFromTouch(ev);

      _this.recordCoords(pev);

      _this.emitter.trigger('pointermove', pev);
    };

    this.handleTouchEnd = function (ev) {
      if (_this.isDragging) {
        // done to guard against touchend followed by touchcancel
        var targetEl = ev.target;
        targetEl.removeEventListener('touchmove', _this.handleTouchMove);
        targetEl.removeEventListener('touchend', _this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', _this.handleTouchEnd);
        window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true

        _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));

        _this.cleanup(); // call last so that pointerup has access to props


        _this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };

    this.handleTouchScroll = function () {
      _this.wasTouchScroll = true;
    };

    this.handleScroll = function (ev) {
      if (!_this.shouldIgnoreMove) {
        var pageX = window.pageXOffset - _this.prevScrollX + _this.prevPageX;
        var pageY = window.pageYOffset - _this.prevScrollY + _this.prevPageY;

        _this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: _this.isTouchDragging,
          subjectEl: _this.subjectEl,
          pageX: pageX,
          pageY: pageY,
          deltaX: pageX - _this.origPageX,
          deltaY: pageY - _this.origPageY
        });
      }
    };

    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Emitter"]();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }

  PointerDragging.prototype.destroy = function () {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  };

  PointerDragging.prototype.tryStart = function (ev) {
    var subjectEl = this.querySubjectEl(ev);
    var downEl = ev.target;

    if (subjectEl && (!this.handleSelector || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work

      this.wasTouchScroll = false;
      return true;
    }

    return false;
  };

  PointerDragging.prototype.cleanup = function () {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null; // keep wasTouchScroll around for later access

    this.destroyScrollWatch();
  };

  PointerDragging.prototype.querySubjectEl = function (ev) {
    if (this.selector) {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.target, this.selector);
    }

    return this.containerEl;
  };

  PointerDragging.prototype.shouldIgnoreMouse = function () {
    return ignoreMouseDepth || this.isTouchDragging;
  }; // can be called by user of this class, to cancel touch-based scrolling for the current drag


  PointerDragging.prototype.cancelTouchScroll = function () {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }; // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------


  PointerDragging.prototype.initScrollWatch = function (ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  };

  PointerDragging.prototype.recordCoords = function (ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.pageXOffset;
      this.prevScrollY = window.pageYOffset;
    }
  };

  PointerDragging.prototype.destroyScrollWatch = function () {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  }; // Event Normalization
  // ----------------------------------------------------------------------------------------------------


  PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
    var deltaX = 0;
    var deltaY = 0; // TODO: repeat code

    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX: deltaX,
      deltaY: deltaY
    };
  };

  PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
    var touches = ev.touches;
    var pageX;
    var pageY;
    var deltaX = 0;
    var deltaY = 0; // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY

    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    } // TODO: repeat code


    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX: pageX,
      pageY: pageY,
      deltaX: deltaX,
      deltaY: deltaY
    };
  };

  return PointerDragging;
}(); // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)


function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
} // Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------


function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(function () {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["config"].touchMouseIgnoreWait);
} // We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------


function listenerCreated() {
  listenerCnt += 1;

  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function listenerDestroyed() {
  listenerCnt -= 1;

  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/


var ElementMirror =
/** @class */
function () {
  function ElementMirror() {
    this.isVisible = false; // must be explicitly enabled

    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller

    this.parentNode = document.body;
    this.zIndex = 9999;
    this.revertDuration = 0;
  }

  ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.pageXOffset;
    this.origScreenY = pageY - window.pageYOffset;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  };

  ElementMirror.prototype.handleMove = function (pageX, pageY) {
    this.deltaX = pageX - window.pageXOffset - this.origScreenX;
    this.deltaY = pageY - window.pageYOffset - this.origScreenY;
    this.updateElPosition();
  }; // can be called before start


  ElementMirror.prototype.setIsVisible = function (bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }

        this.isVisible = bool; // needs to happen before updateElPosition

        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }

      this.isVisible = bool;
    }
  }; // always async


  ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
    var _this = this;

    var done = function done() {
      _this.cleanup();

      callback();
    };

    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && ( // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
        this.doRevertAnimation(done, this.revertDuration);
      } else {
      setTimeout(done, 0);
    }
  };

  ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
    var mirrorEl = this.mirrorEl;
    var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened

    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["whenTransitionDone"])(mirrorEl, function () {
      mirrorEl.style.transition = '';
      callback();
    });
  };

  ElementMirror.prototype.cleanup = function () {
    if (this.mirrorEl) {
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this.mirrorEl);
      this.mirrorEl = null;
    }

    this.sourceEl = null;
  };

  ElementMirror.prototype.updateElPosition = function () {
    if (this.sourceEl && this.isVisible) {
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  };

  ElementMirror.prototype.getMirrorEl = function () {
    var sourceElRect = this.sourceElRect;
    var mirrorEl = this.mirrorEl;

    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.

      mirrorEl.classList.add('fc-unselectable');
      mirrorEl.classList.add('fc-event-dragging');
      Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["applyStyle"])(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }

    return mirrorEl;
  };

  return ElementMirror;
}();
/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/


var ScrollGeomCache =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ScrollGeomCache, _super);

  function ScrollGeomCache(scrollController, doesListening) {
    var _this = _super.call(this) || this;

    _this.handleScroll = function () {
      _this.scrollTop = _this.scrollController.getScrollTop();
      _this.scrollLeft = _this.scrollController.getScrollLeft();

      _this.handleScrollChange();
    };

    _this.scrollController = scrollController;
    _this.doesListening = doesListening;
    _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
    _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
    _this.scrollWidth = scrollController.getScrollWidth();
    _this.scrollHeight = scrollController.getScrollHeight();
    _this.clientWidth = scrollController.getClientWidth();
    _this.clientHeight = scrollController.getClientHeight();
    _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values

    if (_this.doesListening) {
      _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
    }

    return _this;
  }

  ScrollGeomCache.prototype.destroy = function () {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  };

  ScrollGeomCache.prototype.getScrollTop = function () {
    return this.scrollTop;
  };

  ScrollGeomCache.prototype.getScrollLeft = function () {
    return this.scrollLeft;
  };

  ScrollGeomCache.prototype.setScrollTop = function (top) {
    this.scrollController.setScrollTop(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  };

  ScrollGeomCache.prototype.setScrollLeft = function (top) {
    this.scrollController.setScrollLeft(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  };

  ScrollGeomCache.prototype.getClientWidth = function () {
    return this.clientWidth;
  };

  ScrollGeomCache.prototype.getClientHeight = function () {
    return this.clientHeight;
  };

  ScrollGeomCache.prototype.getScrollWidth = function () {
    return this.scrollWidth;
  };

  ScrollGeomCache.prototype.getScrollHeight = function () {
    return this.scrollHeight;
  };

  ScrollGeomCache.prototype.handleScrollChange = function () {};

  return ScrollGeomCache;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["ScrollController"]);

var ElementScrollGeomCache =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ElementScrollGeomCache, _super);

  function ElementScrollGeomCache(el, doesListening) {
    return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["ElementScrollController"](el), doesListening) || this;
  }

  ElementScrollGeomCache.prototype.getEventTarget = function () {
    return this.scrollController.el;
  };

  ElementScrollGeomCache.prototype.computeClientRect = function () {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["computeInnerRect"])(this.scrollController.el);
  };

  return ElementScrollGeomCache;
}(ScrollGeomCache);

var WindowScrollGeomCache =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WindowScrollGeomCache, _super);

  function WindowScrollGeomCache(doesListening) {
    return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["WindowScrollController"](), doesListening) || this;
  }

  WindowScrollGeomCache.prototype.getEventTarget = function () {
    return window;
  };

  WindowScrollGeomCache.prototype.computeClientRect = function () {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }; // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls


  WindowScrollGeomCache.prototype.handleScrollChange = function () {
    this.clientRect = this.computeClientRect();
  };

  return WindowScrollGeomCache;
}(ScrollGeomCache); // If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance


var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/

var AutoScroller =
/** @class */
function () {
  function AutoScroller() {
    var _this = this; // options that can be set by caller


    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels

    this.maxVelocity = 300; // pixels per second
    // internal state

    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null; // protect against the initial pointerdown being too close to an edge and starting the scroll

    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;

    this.animate = function () {
      if (_this.isAnimating) {
        // wasn't cancelled between animation calls
        var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);

        if (edge) {
          var now = getTime();

          _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);

          _this.requestAnimation(now);
        } else {
          _this.isAnimating = false; // will stop animation
        }
      }
    };
  }

  AutoScroller.prototype.start = function (pageX, pageY) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches();
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  };

  AutoScroller.prototype.handleMove = function (pageX, pageY) {
    if (this.isEnabled) {
      var pointerScreenX = pageX - window.pageXOffset;
      var pointerScreenY = pageY - window.pageYOffset;
      var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;

      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }

      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }

      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;

      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  };

  AutoScroller.prototype.stop = function () {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation

      for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
        var scrollCache = _a[_i];
        scrollCache.destroy();
      }

      this.scrollCaches = null;
    }
  };

  AutoScroller.prototype.requestAnimation = function (now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  };

  AutoScroller.prototype.handleSide = function (edge, seconds) {
    var scrollCache = edge.scrollCache;
    var edgeThreshold = this.edgeThreshold;
    var invDistance = edgeThreshold - edge.distance;
    var velocity = // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
    this.maxVelocity * seconds;
    var sign = 1;

    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through

      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;

      case 'top':
        sign = -1;
      // falls through

      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }; // left/top are relative to document topleft


  AutoScroller.prototype.computeBestEdge = function (left, top) {
    var edgeThreshold = this.edgeThreshold;
    var bestSide = null;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      var rect = scrollCache.clientRect;
      var leftDist = left - rect.left;
      var rightDist = rect.right - left;
      var topDist = top - rect.top;
      var bottomDist = rect.bottom - top; // completely within the rect?

      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'top',
            distance: topDist
          };
        }

        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }

        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'left',
            distance: leftDist
          };
        }

        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }

    return bestSide;
  };

  AutoScroller.prototype.buildCaches = function () {
    return this.queryScrollEls().map(function (el) {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }

      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  };

  AutoScroller.prototype.queryScrollEls = function () {
    var els = [];

    for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
      var query = _a[_i];

      if (typeof query === 'object') {
        els.push(query);
      } else {
        els.push.apply(els, Array.prototype.slice.call(document.querySelectorAll(query)));
      }
    }

    return els;
  };

  return AutoScroller;
}();
/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/


var FeaturefulElementDragging =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FeaturefulElementDragging, _super);

  function FeaturefulElementDragging(containerEl, selector) {
    var _this = _super.call(this, containerEl) || this; // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well


    _this.delay = null;
    _this.minDistance = 0;
    _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag

    _this.mirrorNeedsRevert = false;
    _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup

    _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation

    _this.isDelayEnded = false;
    _this.isDistanceSurpassed = false;
    _this.delayTimeoutId = null;

    _this.onPointerDown = function (ev) {
      if (!_this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        _this.isInteracting = true;
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["preventSelection"])(document.body);
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["preventContextMenu"])(document.body); // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.

        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }

        _this.emitter.trigger('pointerdown', ev);

        if (_this.isInteracting && // not destroyed via pointerdown handler
        !_this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          _this.mirror.setIsVisible(false); // reset. caller must set-visible


          _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down


          _this.startDelay(ev);

          if (!_this.minDistance) {
            _this.handleDistanceSurpassed(ev);
          }
        }
      }
    };

    _this.onPointerMove = function (ev) {
      if (_this.isInteracting) {
        _this.emitter.trigger('pointermove', ev);

        if (!_this.isDistanceSurpassed) {
          var minDistance = _this.minDistance;
          var distanceSq = void 0; // current distance from the origin, squared

          var deltaX = ev.deltaX,
              deltaY = ev.deltaY;
          distanceSq = deltaX * deltaX + deltaY * deltaY;

          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            _this.handleDistanceSurpassed(ev);
          }
        }

        if (_this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            _this.mirror.handleMove(ev.pageX, ev.pageY);

            _this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }

          _this.emitter.trigger('dragmove', ev);
        }
      }
    };

    _this.onPointerUp = function (ev) {
      if (_this.isInteracting) {
        _this.isInteracting = false;
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["allowSelection"])(document.body);
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["allowContextMenu"])(document.body);

        _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert


        if (_this.isDragging) {
          _this.autoScroller.stop();

          _this.tryStopDrag(ev); // which will stop the mirror

        }

        if (_this.delayTimeoutId) {
          clearTimeout(_this.delayTimeoutId);
          _this.delayTimeoutId = null;
        }
      }
    };

    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this.onPointerDown);
    pointer.emitter.on('pointermove', _this.onPointerMove);
    pointer.emitter.on('pointerup', _this.onPointerUp);

    if (selector) {
      pointer.selector = selector;
    }

    _this.mirror = new ElementMirror();
    _this.autoScroller = new AutoScroller();
    return _this;
  }

  FeaturefulElementDragging.prototype.destroy = function () {
    this.pointer.destroy(); // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)

    this.onPointerUp({});
  };

  FeaturefulElementDragging.prototype.startDelay = function (ev) {
    var _this = this;

    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(function () {
        _this.delayTimeoutId = null;

        _this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  };

  FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  };

  FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  };

  FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY);
        this.emitter.trigger('dragstart', ev);

        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  };

  FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  };

  FeaturefulElementDragging.prototype.stopDrag = function (ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  }; // fill in the implementations...


  FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
    this.pointer.shouldIgnoreMove = bool;
  };

  FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
    this.mirror.setIsVisible(bool);
  };

  FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
    this.mirrorNeedsRevert = bool;
  };

  FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
    this.autoScroller.isEnabled = bool;
  };

  return FeaturefulElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]);
/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/


var OffsetTracker =
/** @class */
function () {
  function OffsetTracker(el) {
    this.origRect = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(el); // will work fine for divs that have overflow:hidden

    this.scrollCaches = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getClippingParents"])(el).map(function (scrollEl) {
      return new ElementScrollGeomCache(scrollEl, true);
    });
  }

  OffsetTracker.prototype.destroy = function () {
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      scrollCache.destroy();
    }
  };

  OffsetTracker.prototype.computeLeft = function () {
    var left = this.origRect.left;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }

    return left;
  };

  OffsetTracker.prototype.computeTop = function () {
    var top = this.origRect.top;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }

    return top;
  };

  OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
    var point = {
      left: pageX,
      top: pageY
    };

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];

      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["pointInsideRect"])(point, scrollCache.clientRect)) {
        return false;
      }
    }

    return true;
  };

  return OffsetTracker;
}(); // certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615


function isIgnoredClipping(node) {
  var tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}
/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/


var HitDragging =
/** @class */
function () {
  function HitDragging(dragging, droppableStore) {
    var _this = this; // options that can be set by caller


    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events

    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove

    this.handlePointerDown = function (ev) {
      var dragging = _this.dragging;
      _this.initialHit = null;
      _this.movingHit = null;
      _this.finalHit = null;

      _this.prepareHits();

      _this.processFirstCoord(ev);

      if (_this.initialHit || !_this.requireInitial) {
        dragging.setIgnoreMove(false); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(

        _this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };

    this.handleDragStart = function (ev) {
      _this.emitter.trigger('dragstart', ev);

      _this.handleMove(ev, true); // force = fire even if initially null

    };

    this.handleDragMove = function (ev) {
      _this.emitter.trigger('dragmove', ev);

      _this.handleMove(ev);
    };

    this.handlePointerUp = function (ev) {
      _this.releaseHits();

      _this.emitter.trigger('pointerup', ev);
    };

    this.handleDragEnd = function (ev) {
      if (_this.movingHit) {
        _this.emitter.trigger('hitupdate', null, true, ev);
      }

      _this.finalHit = _this.movingHit;
      _this.movingHit = null;

      _this.emitter.trigger('dragend', ev);
    };

    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Emitter"]();
  } // sets initialHit
  // sets coordAdjust


  HitDragging.prototype.processFirstCoord = function (ev) {
    var origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    var adjustedPoint = origPoint;
    var subjectEl = ev.subjectEl;
    var subjectRect;

    if (subjectEl !== document) {
      subjectRect = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["computeRect"])(subjectEl);
      adjustedPoint = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["constrainPoint"])(adjustedPoint, subjectRect);
    }

    var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);

    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        var slicedSubjectRect = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["intersectRects"])(subjectRect, initialHit.rect);

        if (slicedSubjectRect) {
          adjustedPoint = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getRectCenter"])(slicedSubjectRect);
        }
      }

      this.coordAdjust = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["diffPoints"])(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  };

  HitDragging.prototype.handleMove = function (ev, forceHandle) {
    var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);

    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  };

  HitDragging.prototype.prepareHits = function () {
    this.offsetTrackers = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["mapHash"])(this.droppableStore, function (interactionSettings) {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  };

  HitDragging.prototype.releaseHits = function () {
    var offsetTrackers = this.offsetTrackers;

    for (var id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }

    this.offsetTrackers = {};
  };

  HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
    var _a = this,
        droppableStore = _a.droppableStore,
        offsetTrackers = _a.offsetTrackers;

    var bestHit = null;

    for (var id in droppableStore) {
      var component = droppableStore[id].component;
      var offsetTracker = offsetTrackers[id];

      if (offsetTracker && // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        var originLeft = offsetTracker.computeLeft();
        var originTop = offsetTracker.computeTop();
        var positionLeft = offsetLeft - originLeft;
        var positionTop = offsetTop - originTop;
        var origRect = offsetTracker.origRect;
        var width = origRect.right - origRect.left;
        var height = origRect.bottom - origRect.top;

        if ( // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          var hit = component.queryHit(positionLeft, positionTop, width, height);
          var dateProfile = component.context.getCurrentData().dateProfile;

          if (hit && // make sure the hit is within activeRange, meaning it's not a deal cell
          Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["rangeContainsRange"])(dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
            // TODO: better way to re-orient rectangle
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }

    return bestHit;
  };

  return HitDragging;
}();

function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }

  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }

  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["isDateSpansEqual"])(hit0.dateSpan, hit1.dateSpan);
}

function buildDatePointApiWithContext(dateSpan, context) {
  var props = {};

  for (var _i = 0, _a = context.pluginHooks.datePointTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, transform(dateSpan, context));
  }

  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, buildDatePointApi(dateSpan, context.dateEnv));

  return props;
}

function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}
/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/


var DateClicking =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DateClicking, _super);

  function DateClicking(settings) {
    var _this = _super.call(this, settings) || this;

    _this.handlePointerDown = function (pev) {
      var dragging = _this.dragging;
      var downEl = pev.origEvent.target; // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired

      dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));
    }; // won't even fire if moving was ignored


    _this.handleDragEnd = function (ev) {
      var component = _this.component;
      var pointer = _this.dragging.pointer;

      if (!pointer.wasTouchScroll) {
        var _a = _this.hitDragging,
            initialHit = _a.initialHit,
            finalHit = _a.finalHit;

        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          var context = component.context;

          var arg = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });

          context.emitter.trigger('dateClick', arg);
        }
      }
    }; // we DO want to watch pointer moves because otherwise finalHit won't get populated


    _this.dragging = new FeaturefulElementDragging(settings.el);
    _this.dragging.autoScroller.isEnabled = false;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  DateClicking.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return DateClicking;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);
/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/


var DateSelecting =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DateSelecting, _super);

  function DateSelecting(settings) {
    var _this = _super.call(this, settings) || this;

    _this.dragSelection = null;

    _this.handlePointerDown = function (ev) {
      var _a = _this,
          component = _a.component,
          dragging = _a.dragging;
      var options = component.context.options;
      var canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target); // don't bother to watch expensive moves if component won't do selection

      dragging.setIgnoreMove(!canSelect); // if touch, require user to hold down

      dragging.delay = ev.isTouch ? getComponentTouchDelay(component) : null;
    };

    _this.handleDragStart = function (ev) {
      _this.component.context.calendarApi.unselect(ev); // unselect previous selections

    };

    _this.handleHitUpdate = function (hit, isFinal) {
      var context = _this.component.context;
      var dragSelection = null;
      var isInvalid = false;

      if (hit) {
        dragSelection = joinHitsIntoSelection(_this.hitDragging.initialHit, hit, context.pluginHooks.dateSelectionTransformers);

        if (!dragSelection || !_this.component.isDateSelectionValid(dragSelection)) {
          isInvalid = true;
          dragSelection = null;
        }
      }

      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }

      if (!isInvalid) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
      } else {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
      }

      if (!isFinal) {
        _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };

    _this.handlePointerUp = function (pev) {
      if (_this.dragSelection) {
        // selection is already rendered, so just need to report selection
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["triggerDateSelect"])(_this.dragSelection, pev, _this.component.context);
        _this.dragSelection = null;
      }
    };

    var component = settings.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this.handlePointerUp);
    return _this;
  }

  DateSelecting.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return DateSelecting;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

function getComponentTouchDelay(component) {
  var options = component.context.options;
  var delay = options.selectLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["compareNumbers"]);
  var props = {};

  for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
    var transformer = dateSelectionTransformers_1[_i];
    var res = transformer(hit0, hit1);

    if (res === false) {
      return null;
    }

    if (res) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, res);
    }
  }

  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}

var EventDragging =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EventDragging, _super);

  function EventDragging(settings) {
    var _this = _super.call(this, settings) || this; // internal state


    _this.subjectEl = null;
    _this.subjectSeg = null; // the seg being selected/dragged

    _this.isDragging = false;
    _this.eventRange = null;
    _this.relevantEvents = null; // the events being dragged

    _this.receivingContext = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;

    _this.handlePointerDown = function (ev) {
      var origTarget = ev.origEvent.target;
      var _a = _this,
          component = _a.component,
          dragging = _a.dragging;
      var mirror = dragging.mirror;
      var options = component.context.options;
      var initialContext = component.context;
      _this.subjectEl = ev.subjectEl;
      var subjectSeg = _this.subjectSeg = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(ev.subjectEl);
      var eventRange = _this.eventRange = subjectSeg.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      _this.relevantEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
      dragging.delay = // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay$1(component) : null;

      if (options.fixedMirrorParent) {
        mirror.parentNode = options.fixedMirrorParent;
      } else {
        mirror.parentNode = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(origTarget, '.fc');
      }

      mirror.revertDuration = options.dragRevertDuration;
      var isValid = component.isValidSegDownEl(origTarget) && !Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(origTarget, '.fc-event-resizer'); // NOT on a resizer

      dragging.setIgnoreMove(!isValid); // disable dragging for elements that are resizable (ie, selectable)
      // but are not draggable

      _this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
    };

    _this.handleDragStart = function (ev) {
      var initialContext = _this.component.context;
      var eventRange = _this.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;

      if (ev.isTouch) {
        // need to select a different event?
        if (eventInstanceId !== _this.component.props.eventSelection) {
          initialContext.dispatch({
            type: 'SELECT_EVENT',
            eventInstanceId: eventInstanceId
          });
        }
      } else {
        // if now using mouse, but was previous touch interaction, clear selected event
        initialContext.dispatch({
          type: 'UNSELECT_EVENT'
        });
      }

      if (_this.isDragging) {
        initialContext.calendarApi.unselect(ev); // unselect *date* selection

        initialContext.emitter.trigger('eventDragStart', {
          el: _this.subjectEl,
          event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };

    _this.handleHitUpdate = function (hit, isFinal) {
      if (!_this.isDragging) {
        return;
      }

      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var initialContext = _this.component.context; // states based on new hit

      var receivingContext = null;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
        isEvent: true
      };

      if (hit) {
        var receivingComponent = hit.component;
        receivingContext = receivingComponent.context;
        var receivingOptions = receivingContext.options;

        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);

          if (mutation) {
            mutatedRelevantEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;

            if (!receivingComponent.isInteractionValid(interaction)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
            }
          }
        } else {
          receivingContext = null;
        }
      }

      _this.displayDrag(receivingContext, interaction);

      if (!isInvalid) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
      } else {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
      }

      if (!isFinal) {
        if (initialContext === receivingContext && // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        _this.dragging.setMirrorNeedsRevert(!mutation); // render the mirror if no already-rendered mirror
        // TODO: wish we could somehow wait for dispatch to guarantee render


        _this.dragging.setMirrorIsVisible(!hit || !document.querySelector('.fc-event-mirror')); // assign states based on new hit


        _this.receivingContext = receivingContext;
        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    _this.handlePointerUp = function () {
      if (!_this.isDragging) {
        _this.cleanup(); // because handleDragEnd won't fire

      }
    };

    _this.handleDragEnd = function (ev) {
      if (_this.isDragging) {
        var initialContext_1 = _this.component.context;
        var initialView = initialContext_1.viewApi;
        var _a = _this,
            receivingContext_1 = _a.receivingContext,
            validMutation = _a.validMutation;
        var eventDef = _this.eventRange.def;
        var eventInstance = _this.eventRange.instance;
        var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialContext_1, eventDef, eventInstance);
        var relevantEvents_1 = _this.relevantEvents;
        var mutatedRelevantEvents_1 = _this.mutatedRelevantEvents;
        var finalHit = _this.hitDragging.finalHit;

        _this.clearDrag(); // must happen after revert animation


        initialContext_1.emitter.trigger('eventDragStop', {
          el: _this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });

        if (validMutation) {
          // dropped within same calendar
          if (receivingContext_1 === initialContext_1) {
            var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](initialContext_1, mutatedRelevantEvents_1.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents_1.instances[eventInstance.instanceId] : null);
            initialContext_1.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents_1
            });
            var eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["buildEventApis"])(mutatedRelevantEvents_1, initialContext_1, eventInstance),
              revert: function revert() {
                initialContext_1.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents_1
                });
              }
            };
            var transformed = {};

            for (var _i = 0, _b = initialContext_1.getCurrentData().pluginHooks.eventDropTransformers; _i < _b.length; _i++) {
              var transformer = _b[_i];

              Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(transformed, transformer(validMutation, initialContext_1));
            }

            initialContext_1.emitter.trigger('eventDrop', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext_1.emitter.trigger('eventChange', eventChangeArg); // dropped in different calendar
          } else if (receivingContext_1) {
            var eventRemoveArg = {
              event: eventApi,
              relatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["buildEventApis"])(relevantEvents_1, initialContext_1, eventInstance),
              revert: function revert() {
                initialContext_1.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents_1
                });
              }
            };
            initialContext_1.emitter.trigger('eventLeave', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext_1.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: relevantEvents_1
            });
            initialContext_1.emitter.trigger('eventRemove', eventRemoveArg);
            var addedEventDef = mutatedRelevantEvents_1.defs[eventDef.defId];
            var addedEventInstance = mutatedRelevantEvents_1.instances[eventInstance.instanceId];
            var addedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](receivingContext_1, addedEventDef, addedEventInstance);
            receivingContext_1.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents_1
            });
            var eventAddArg = {
              event: addedEventApi,
              relatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["buildEventApis"])(mutatedRelevantEvents_1, receivingContext_1, addedEventInstance),
              revert: function revert() {
                receivingContext_1.dispatch({
                  type: 'REMOVE_EVENTS',
                  eventStore: mutatedRelevantEvents_1
                });
              }
            };
            receivingContext_1.emitter.trigger('eventAdd', eventAddArg);

            if (ev.isTouch) {
              receivingContext_1.dispatch({
                type: 'SELECT_EVENT',
                eventInstanceId: eventInstance.instanceId
              });
            }

            receivingContext_1.emitter.trigger('drop', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext_1)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.component.context.viewApi
            }));
            receivingContext_1.emitter.trigger('eventReceive', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.component.context.viewApi
            }));
          }
        } else {
          initialContext_1.emitter.trigger('_noEventDrop');
        }
      }

      _this.cleanup();
    };

    var component = _this.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this.handlePointerUp);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  EventDragging.prototype.destroy = function () {
    this.dragging.destroy();
  }; // render a drag state on the next receivingCalendar


  EventDragging.prototype.displayDrag = function (nextContext, state) {
    var initialContext = this.component.context;
    var prevContext = this.receivingContext; // does the previous calendar need to be cleared?

    if (prevContext && prevContext !== nextContext) {
      // does the initial calendar need to be cleared?
      // if so, don't clear all the way. we still need to to hide the affectedEvents
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
            isEvent: true
          }
        }); // completely clear the old calendar if it wasn't the initial
      } else {
        prevContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state: state
      });
    }
  };

  EventDragging.prototype.clearDrag = function () {
    var initialCalendar = this.component.context;
    var receivingContext = this.receivingContext;

    if (receivingContext) {
      receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    } // the initial calendar might have an dummy drag state from displayDrag


    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  };

  EventDragging.prototype.cleanup = function () {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }; // TODO: test this in IE11
  // QUESTION: why do we need it on the resizable???


  EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  return EventDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

function computeEventMutation(hit0, hit1, massagers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var date0 = dateSpan0.range.start;
  var date1 = dateSpan1.range.start;
  var standardProps = {};

  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.component.context.options.allDayMaintainDuration;

    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(date0);
    }
  }

  var delta = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, hit0.component.context.dateEnv, hit0.component === hit1.component ? hit0.component.largeUnit : null);

  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }

  var mutation = {
    datesDelta: delta,
    standardProps: standardProps
  };

  for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
    var massager = massagers_1[_i];
    massager(mutation, hit0, hit1);
  }

  return mutation;
}

function getComponentTouchDelay$1(component) {
  var options = component.context.options;
  var delay = options.eventLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

var EventResizing =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(EventResizing, _super);

  function EventResizing(settings) {
    var _this = _super.call(this, settings) || this; // internal state


    _this.draggingSegEl = null;
    _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?

    _this.eventRange = null;
    _this.relevantEvents = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;

    _this.handlePointerDown = function (ev) {
      var component = _this.component;

      var segEl = _this.querySegEl(ev);

      var seg = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(segEl);
      var eventRange = _this.eventRange = seg.eventRange;
      _this.dragging.minDistance = component.context.options.eventDragMinDistance; // if touch, need to be working with a selected event

      _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId);
    };

    _this.handleDragStart = function (ev) {
      var context = _this.component.context;
      var eventRange = _this.eventRange;
      _this.relevantEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getRelevantEvents"])(context.getCurrentData().eventStore, _this.eventRange.instance.instanceId);

      var segEl = _this.querySegEl(ev);

      _this.draggingSegEl = segEl;
      _this.draggingSeg = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getElSeg"])(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };

    _this.handleHitUpdate = function (hit, isFinal, ev) {
      var context = _this.component.context;
      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var eventInstance = _this.eventRange.instance;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
        isEvent: true
      };

      if (hit) {
        mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range, context.pluginHooks.eventResizeJoinTransforms);
      }

      if (mutation) {
        mutatedRelevantEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["applyMutationToEventStore"])(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;

        if (!_this.component.isInteractionValid(interaction)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }

      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }

      if (!isInvalid) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
      } else {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
      }

      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    _this.handleDragEnd = function (ev) {
      var context = _this.component.context;
      var eventDef = _this.eventRange.def;
      var eventInstance = _this.eventRange.instance;
      var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](context, eventDef, eventInstance);
      var relevantEvents = _this.relevantEvents;
      var mutatedRelevantEvents = _this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: _this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });

      if (_this.validMutation) {
        var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        var eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["buildEventApis"])(mutatedRelevantEvents, context, eventInstance),
          revert: function revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents
            });
          }
        };
        context.emitter.trigger('eventResize', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, eventChangeArg), {
          el: _this.draggingSegEl,
          startDelta: _this.validMutation.startDelta || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
          endDelta: _this.validMutation.endDelta || Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      } // reset all internal state


      _this.draggingSeg = null;
      _this.relevantEvents = null;
      _this.validMutation = null; // okay to keep eventInstance around. useful to set it in handlePointerDown
    };

    var component = settings.component;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsToStore"])(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  EventResizing.prototype.destroy = function () {
    this.dragging.destroy();
  };

  EventResizing.prototype.querySegEl = function (ev) {
    return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(ev.subjectEl, '.fc-event');
  };

  return EventResizing;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["Interaction"]);

function computeMutation(hit0, hit1, isFromStart, instanceRange, transforms) {
  var dateEnv = hit0.component.context.dateEnv;
  var date0 = hit0.dateSpan.range.start;
  var date1 = hit1.dateSpan.range.start;
  var delta = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["diffDates"])(date0, date1, dateEnv, hit0.component.largeUnit);
  var props = {};

  for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
    var transform = transforms_1[_i];
    var res = transform(hit0, hit1);

    if (res === false) {
      return null;
    }

    if (res) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(props, res);
    }
  }

  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      props.startDelta = delta;
      return props;
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    props.endDelta = delta;
    return props;
  }

  return null;
}

var UnselectAuto =
/** @class */
function () {
  function UnselectAuto(context) {
    var _this = this;

    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system

    this.matchesCancel = false;
    this.matchesEvent = false;

    this.onSelect = function (selectInfo) {
      if (selectInfo.jsEvent) {
        _this.isRecentPointerDateSelect = true;
      }
    };

    this.onDocumentPointerDown = function (pev) {
      var unselectCancel = _this.context.options.unselectCancel;
      var downEl = pev.origEvent.target;
      _this.matchesCancel = !!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, unselectCancel);
      _this.matchesEvent = !!Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementClosest"])(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };

    this.onDocumentPointerUp = function (pev) {
      var context = _this.context;
      var documentPointer = _this.documentPointer;
      var calendarState = context.getCurrentData(); // touch-scrolling should never unfocus any type of selection

      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection && // an existing date selection?
        !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
            var unselectAuto = context.options.unselectAuto;

            if (unselectAuto && (!unselectAuto || !_this.matchesCancel)) {
              context.calendarApi.unselect(pev);
            }
          }

        if (calendarState.eventSelection && // an existing event selected?
        !_this.matchesEvent // interaction DIDN'T start on an event
        ) {
            context.dispatch({
              type: 'UNSELECT_EVENT'
            });
          }
      }

      _this.isRecentPointerDateSelect = false;
    };

    var documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */

    context.emitter.on('select', this.onSelect);
  }

  UnselectAuto.prototype.destroy = function () {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  };

  return UnselectAuto;
}();

var OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"]
};
var LISTENER_REFINERS = {
  dateClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventDragStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventDragStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventDrop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventResizeStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventResizeStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventResize: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  drop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventReceive: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
  eventLeave: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["identity"]
};
/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/

var ExternalElementDragging =
/** @class */
function () {
  function ExternalElementDragging(dragging, suppliedDragMeta) {
    var _this = this;

    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false

    this.suppliedDragMeta = null;
    this.dragMeta = null;

    this.handleDragStart = function (ev) {
      _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
    };

    this.handleHitUpdate = function (hit, isFinal, ev) {
      var dragging = _this.hitDragging.dragging;
      var receivingContext = null;
      var droppableEvent = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
        mutatedEvents: Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])(),
        isEvent: _this.dragMeta.create
      };

      if (hit) {
        receivingContext = hit.component.context;

        if (_this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingContext);
          interaction.mutatedEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent);
          isInvalid = !Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["isInteractionValid"])(interaction, receivingContext);

          if (isInvalid) {
            interaction.mutatedEvents = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEmptyEventStore"])();
            droppableEvent = null;
          }
        }
      }

      _this.displayDrag(receivingContext, interaction); // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render


      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));

      if (!isInvalid) {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["enableCursor"])();
      } else {
        Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["disableCursor"])();
      }

      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        _this.receivingContext = receivingContext;
        _this.droppableEvent = droppableEvent;
      }
    };

    this.handleDragEnd = function (pev) {
      var _a = _this,
          receivingContext = _a.receivingContext,
          droppableEvent = _a.droppableEvent;

      _this.clearDrag();

      if (receivingContext && droppableEvent) {
        var finalHit = _this.hitDragging.finalHit;
        var finalView = finalHit.component.context.viewApi;
        var dragMeta = _this.dragMeta;
        receivingContext.emitter.trigger('drop', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));

        if (dragMeta.create) {
          var addingEvents_1 = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["eventTupleToStore"])(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents_1
          });

          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          } // signal that an external event landed


          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["EventApi"](receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert: function revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents_1
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }

      _this.receivingContext = null;
      _this.droppableEvent = null;
    };

    var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["interactionSettingsStore"]);
    hitDragging.requireInitial = false; // will start outside of a component

    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }

  ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta);
    }

    if (typeof this.suppliedDragMeta === 'function') {
      return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(this.suppliedDragMeta(subjectEl));
    }

    return getDragMetaFromEl(subjectEl);
  };

  ExternalElementDragging.prototype.displayDrag = function (nextContext, state) {
    var prevContext = this.receivingContext;

    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state: state
      });
    }
  };

  ExternalElementDragging.prototype.clearDrag = function () {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  };

  ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingContext) {
    var dropAccept = receivingContext.options.dropAccept;

    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }

    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean(Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["elementMatches"])(el, dropAccept));
    }

    return true;
  };

  return ExternalElementDragging;
}(); // Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------


function computeEventForDateSpan(dateSpan, dragMeta, context) {
  var defProps = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, dragMeta.leftoverProps);

  for (var _i = 0, _a = context.pluginHooks.externalDefTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(defProps, transform(dateSpan, dragMeta));
  }

  var _b = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["refineEventDef"])(defProps, context),
      refined = _b.refined,
      extra = _b.extra;

  var def = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseEventDef"])(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
  context);
  var start = dateSpan.range.start; // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time

  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }

  var end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["getDefaultEventEnd"])(dateSpan.allDay, start, context);
  var instance = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createEventInstance"])(def.defId, {
    start: start,
    end: end
  });
  return {
    def: def,
    instance: instance
  };
} // Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------


function getDragMetaFromEl(el) {
  var str = getEmbeddedElData(el, 'event');
  var obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation

  return Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["parseDragMeta"])(obj);
}

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix = '';

function getEmbeddedElData(el, name) {
  var prefix = _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["config"].dataAttrPrefix;
  var prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}
/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/


var ExternalDraggable =
/** @class */
function () {
  function ExternalDraggable(el, settings) {
    var _this = this;

    if (settings === void 0) {
      settings = {};
    }

    this.handlePointerDown = function (ev) {
      var dragging = _this.dragging;
      var _a = _this.settings,
          minDistance = _a.minDistance,
          longPressDelay = _a.longPressDelay;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["BASE_OPTION_DEFAULTS"].eventDragMinDistance;
      dragging.delay = ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["BASE_OPTION_DEFAULTS"].longPressDelay : 0;
    };

    this.handleDragStart = function (ev) {
      if (ev.isTouch && _this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        _this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };

    this.settings = settings;
    var dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;

    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }

    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }

    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  ExternalDraggable.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return ExternalDraggable;
}();
/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/


var InferredElementDragging =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(InferredElementDragging, _super);

  function InferredElementDragging(containerEl) {
    var _this = _super.call(this, containerEl) || this;

    _this.shouldIgnoreMove = false;
    _this.mirrorSelector = '';
    _this.currentMirrorEl = null;

    _this.handlePointerDown = function (ev) {
      _this.emitter.trigger('pointerdown', ev);

      if (!_this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        _this.emitter.trigger('dragstart', ev);
      }
    };

    _this.handlePointerMove = function (ev) {
      if (!_this.shouldIgnoreMove) {
        _this.emitter.trigger('dragmove', ev);
      }
    };

    _this.handlePointerUp = function (ev) {
      _this.emitter.trigger('pointerup', ev);

      if (!_this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        _this.emitter.trigger('dragend', ev);
      }
    };

    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this.handlePointerDown);
    pointer.emitter.on('pointermove', _this.handlePointerMove);
    pointer.emitter.on('pointerup', _this.handlePointerUp);
    return _this;
  }

  InferredElementDragging.prototype.destroy = function () {
    this.pointer.destroy();
  };

  InferredElementDragging.prototype.setIgnoreMove = function (bool) {
    this.shouldIgnoreMove = bool;
  };

  InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      var mirrorEl = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;

      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  };

  return InferredElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["ElementDragging"]);
/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/


var ThirdPartyDraggable =
/** @class */
function () {
  function ThirdPartyDraggable(containerOrSettings, settings) {
    var containerEl = document;

    if ( // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }

    var dragging = this.dragging = new InferredElementDragging(containerEl);

    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }

    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }

    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  ThirdPartyDraggable.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return ThirdPartyDraggable;
}();

var main = Object(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});
/* harmony default export */ __webpack_exports__["default"] = (main);


/***/ }),

/***/ "ooYX":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n  \n    <!-- <button (click)=\"updateHeader()\" id=\"updateHeader\">Update header</button>\n    <button (click)=\"updateEvents()\" id=\"updateEvents\">Update events</button> -->\n    <full-calendar *ngIf=\"calendarOptions\" #fullcalendar [options]=\"calendarOptions\" ></full-calendar>\n    </div>\n</div>");

/***/ }),

/***/ "pDWP":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n.fc .fc-popover {\n    position: fixed;\n    top: 0; /* for when not positioned yet */\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    margin: 2px 3px 0;\n  }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover {\n    z-index: 8;\n  }\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTSxFQUFFLGdDQUFnQztJQUN4QyxxQ0FBcUM7RUFDdkM7QUFDRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLGFBQWE7RUFDZjtBQUNGO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLHNCQUFzQjtJQUN0Qiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLHlDQUF5QztFQUMzQztBQUNGO0lBQ0ksb0NBQW9DO0lBQ3BDLGdFQUFnRTtFQUNsRTtBQUNGLCtDQUErQztBQUMvQzs7NEJBRTRCLGlDQUFpQztBQUM3RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUU7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBRTtBQUNsQix1QkFBdUIsaUNBQWlDO0lBQ3BELGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsd0RBQXdEO0VBQ3RFO0FBQ0Y7TUFDTSwwQ0FBMEM7TUFDMUMsb0VBQW9FO0lBQ3RFO0FBQ0o7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsNEZBQTRGO0VBQ2hIO0FBQ0Y7O0VBRUUsYUFBYTs7QUFFZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtBQUNGO0lBQ0ksWUFBWTtFQUNkO0FBQ0Y7O0VBRUUsaUNBQWlDOztBQUVuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7RUFFRSxvQkFBb0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlLEVBQUUsbUZBQW1GO0VBQ3RHO0FBQ0Y7O0VBRUUsd0NBQXdDOztBQUUxQztBQUNBO01BQ00sa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxRQUFRO0lBQ1Y7QUFDSjtNQUNNLGtCQUFrQixFQUFFLGtEQUFrRDtNQUN0RSxlQUFlLEVBQUUsZ0dBQWdHO0lBQ25IO0FBQ0osK0JBQStCLGlDQUFpQztFQUM5RDtBQUNGO01BQ00sa0JBQWtCO0lBQ3BCO0FBQ0o7O0VBRUUsa0JBQWtCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTSxFQUFFLG9EQUFvRDtJQUM1RCxPQUFPLEVBQUUsSUFBSTtJQUNiLFFBQVEsRUFBRSxJQUFJO0VBQ2hCO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7RUFDWDtBQUNGOztFQUVFLGVBQWU7O0FBRWpCO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQsc0NBQXNDLFdBQVc7QUFDakQsdUNBQXVDLFdBQVc7QUFDbEQ7O0VBRUUsV0FBVzs7QUFFYjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjtJQUNJLFVBQVU7RUFDWjtBQUNGOztFQUVFLG9DQUFvQzs7QUFFdEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUNGOztFQUVFLCtCQUErQjs7QUFFakM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxzRUFBc0U7SUFDdEUsY0FBYztJQUNkLDRDQUE0QztFQUM5QztBQUNGOztFQUVFLFlBQVk7O0FBRWQ7QUFDQTtJQUNJLFVBQVU7RUFDWjtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUNGOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksT0FBTztJQUNQLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksZ0JBQWdCLEVBQUUsc0RBQXNEO0VBQzFFO0FBQ0Ysb0JBQW9CLHFGQUFxRjtFQUN2RyxrQkFBa0IsRUFBRSxpQ0FBaUM7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFFLDBDQUEwQztFQUM5RCxnQkFBZ0I7RUFDaEIsMkNBQTJDO0FBQzdDO0FBQ0EsbURBQW1EO0FBQ25EO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0lBRUksWUFBWTtFQUNkO0FBQ0YsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7QUFFRjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZLEVBQUUsaURBQWlEO0lBQy9ELGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRjs7SUFFSSw4QkFBOEI7RUFDaEM7QUFDRjtJQUNJLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Ysd0JBQXdCLG1CQUFtQjtFQUN6QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG9HQUFvRztFQUNwRyxrQkFBa0I7RUFDbEIsK0RBQStEO0FBQ2pFO0FBQ0EsMkNBQTJDO0FBQzNDO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOnJvb3Qge1xuICAtLWZjLWRheWdyaWQtZXZlbnQtZG90LXdpZHRoOiA4cHg7XG59XG4uZmMgLmZjLXBvcG92ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7IC8qIGZvciB3aGVuIG5vdCBwb3NpdGlvbmVkIHlldCAqL1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLC4xNSk7XG4gIH1cbi5mYyAuZmMtcG9wb3Zlci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcHggNHB4O1xuICB9XG4uZmMgLmZjLXBvcG92ZXItdGl0bGUge1xuICAgIG1hcmdpbjogMCAycHg7XG4gIH1cbi5mYyAuZmMtcG9wb3Zlci1jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuLmZjLXRoZW1lLXN0YW5kYXJkIC5mYy1wb3BvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZjLWJvcmRlci1jb2xvciwgI2RkZCk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1wYWdlLWJnLWNvbG9yLCAjZmZmKTtcbiAgfVxuLmZjLXRoZW1lLXN0YW5kYXJkIC5mYy1wb3BvdmVyLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZjLW5ldXRyYWwtYmctY29sb3IsIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKSk7XG4gIH1cbi8qIGhlbHAgdGhpbmdzIGNsZWFyIG1hcmdpbnMgb2YgaW5uZXIgY29udGVudCAqL1xuLmZjLWRheWdyaWQtZGF5LWZyYW1lLFxuLmZjLWRheWdyaWQtZGF5LWV2ZW50cyxcbi5mYy1kYXlncmlkLWV2ZW50LWhhcm5lc3MgeyAvKiBmb3IgZXZlbnQgdG9wL2JvdHRvbSBtYXJnaW5zICovXG59XG4uZmMtZGF5Z3JpZC1kYXktZnJhbWU6YmVmb3JlLCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzOmJlZm9yZSwgLmZjLWRheWdyaWQtZXZlbnQtaGFybmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7IH1cbi5mYy1kYXlncmlkLWRheS1mcmFtZTphZnRlciwgLmZjLWRheWdyaWQtZGF5LWV2ZW50czphZnRlciwgLmZjLWRheWdyaWQtZXZlbnQtaGFybmVzczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuLmZjIC5mYy1kYXlncmlkLWJvZHkgeyAvKiBhIDxkaXY+IHRoYXQgd3JhcHMgdGhlIHRhYmxlICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7IC8qIGNvbnRhaW5lciBpbm5lciB6LWluZGV4J3MgYmVjYXVzZSA8dHI+cyBjYW4ndCBkbyBpdCAqL1xuICB9XG4uZmMgLmZjLWRheWdyaWQtZGF5LmZjLWRheS10b2RheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjIwLCA0MCwgMC4xNSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy10b2RheS1iZy1jb2xvciwgcmdiYSgyNTUsIDIyMCwgNDAsIDAuMTUpKTtcbiAgICB9XG4uZmMgLmZjLWRheWdyaWQtZGF5LWZyYW1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTsgLyogc2VlbXMgdG8gd29yayBiZXR0ZXIgdGhhbiBgaGVpZ2h0YCBiZWNhdXNlIHNldHMgaGVpZ2h0IGFmdGVyIHJvd3MvY2VsbHMgbmF0dXJhbGx5IGRvIGl0ICovXG4gIH1cbi5mYyB7XG5cbiAgLyogY2VsbCB0b3AgKi9cblxufVxuLmZjIC5mYy1kYXlncmlkLWRheS10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4uZmMgLmZjLWRheS1vdGhlciAuZmMtZGF5Z3JpZC1kYXktdG9wIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbi5mYyB7XG5cbiAgLyogZGF5IG51bWJlciAod2l0aGluIGNlbGwgdG9wKSAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LW51bWJlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG4uZmMge1xuXG4gIC8qIGV2ZW50IGNvbnRhaW5lciAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LWV2ZW50cyB7XG4gICAgbWFyZ2luLXRvcDogMXB4OyAvKiBuZWVkcyB0byBiZSBtYXJnaW4sIG5vdCBwYWRkaW5nLCBzbyB0aGF0IGF2YWlsYWJsZSBjZWxsIGhlaWdodCBjYW4gYmUgY29tcHV0ZWQgKi9cbiAgfVxuLmZjIHtcblxuICAvKiBwb3NpdGlvbmluZyBmb3IgYmFsYW5jZWQgdnMgbmF0dXJhbCAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtYm9keS1iYWxhbmNlZCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4uZmMgLmZjLWRheWdyaWQtYm9keS11bmJhbGFuY2VkIC5mYy1kYXlncmlkLWRheS1ldmVudHMge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBmb3IgY29udGFpbmluZyBhYnMgcG9zaXRpb25lZCBldmVudCBoYXJuZXNzZXMgKi9cbiAgICAgIG1pbi1oZWlnaHQ6IDJlbTsgLyogaW4gYWRkaXRpb24gdG8gYmVpbmcgYSBtaW4taGVpZ2h0IGR1cmluZyBuYXR1cmFsIGhlaWdodCwgZXF1YWxpemVzIHRoZSBoZWlnaHRzIGEgbGl0dGxlIGJpdCAqL1xuICAgIH1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LW5hdHVyYWwgeyAvKiBjYW4gY29leGlzdCB3aXRoIC11bmJhbGFuY2VkICovXG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LW5hdHVyYWwgLmZjLWRheWdyaWQtZGF5LWV2ZW50cyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuLmZjIHtcblxuICAvKiBldmVudCBoYXJuZXNzICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzLWFicyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDsgLyogZmFsbGJhY2sgY29vcmRzIGZvciB3aGVuIGNhbm5vdCB5ZXQgYmUgY29tcHV0ZWQgKi9cbiAgICBsZWZ0OiAwOyAvKiAqL1xuICAgIHJpZ2h0OiAwOyAvKiAqL1xuICB9XG4uZmMgLmZjLWRheWdyaWQtYmctaGFybmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbi5mYyB7XG5cbiAgLyogYmcgY29udGVudCAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LWJnIC5mYy1ub24tYnVzaW5lc3MgeyB6LWluZGV4OiAxIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYmcgLmZjLWJnLWV2ZW50IHsgei1pbmRleDogMiB9XG4uZmMgLmZjLWRheWdyaWQtZGF5LWJnIC5mYy1oaWdobGlnaHQgeyB6LWluZGV4OiAzIH1cbi5mYyB7XG5cbiAgLyogZXZlbnRzICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1ldmVudCB7XG4gICAgei1pbmRleDogNjtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1ldmVudC5mYy1ldmVudC1taXJyb3Ige1xuICAgIHotaW5kZXg6IDc7XG4gIH1cbi5mYyB7XG5cbiAgLyogY2VsbCBib3R0b20gKHdpdGhpbiBkYXktZXZlbnRzKSAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LWJvdHRvbSB7XG4gICAgZm9udC1zaXplOiAuODVlbTtcbiAgICBtYXJnaW46IDJweCAzcHggMDtcbiAgfVxuLmZjIC5mYy1kYXlncmlkLW1vcmUtbGluayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4uZmMge1xuXG4gIC8qIHdlZWsgbnVtYmVyICh3aXRoaW4gZnJhbWUpICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC13ZWVrLW51bWJlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtbmV1dHJhbC1iZy1jb2xvciwgcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpKTtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBjb2xvcjogdmFyKC0tZmMtbmV1dHJhbC10ZXh0LWNvbG9yLCAjODA4MDgwKTtcbiAgfVxuLmZjIHtcblxuICAvKiBwb3BvdmVyICovXG5cbn1cbi5mYyAuZmMtbW9yZS1wb3BvdmVyIHtcbiAgICB6LWluZGV4OiA4O1xuICB9XG4uZmMgLmZjLW1vcmUtcG9wb3ZlciAuZmMtcG9wb3Zlci1ib2R5IHtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQuZmMtZXZlbnQtZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LWVuZCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtZGF5Z3JpZC13ZWVrLW51bWJlciB7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XG4gIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLXdlZWstbnVtYmVyIHtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtZGF5Z3JpZC1kYXktZnJhbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7IC8qIHdpbGwgY2F1c2UgaW5uZXIgYWJzb2x1dGUgc3R1ZmYgdG8gZXhwYW5kIHRvIDx0ZD4gKi9cbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQgeyAvKiBtYWtlIHJvb3QtbGV2ZWwsIGJlY2F1c2Ugd2lsbCBiZSBkcmFnZ2VkLWFuZC1kcm9wcGVkIG91dHNpZGUgb2YgYSBjb21wb25lbnQgcm9vdCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciB6LWluZGV4ZXMgYXNzaWduZWQgbGF0ZXIgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyAvKiBkb3QgZXZlbnQgbmVlZHMgdGhpcyB0byB3aGVuIHNlbGVjdGVkICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG59XG4vKiAtLS0gdGhlIHJlY3RhbmdsZSAoXCJibG9ja1wiKSBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtYmxvY2stZXZlbnQgLmZjLWV2ZW50LXRpbWUsXG4gIC5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aXRsZSB7XG4gICAgcGFkZGluZzogMXB4O1xuICB9XG4vKiAtLS0gdGhlIGRvdCBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWRvdC1ldmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwXG5cbn1cbi5mYy1kYXlncmlkLWRvdC1ldmVudCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4td2lkdGg6IDA7IC8qIGltcG9ydGFudCBmb3IgYWxsb3dpbmcgdG8gc2hyaW5rIGFsbCB0aGUgd2F5ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtZG90LWV2ZW50OmhvdmVyLFxuICAuZmMtZGF5Z3JpZC1kb3QtZXZlbnQuZmMtZXZlbnQtbWlycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbi5mYy1kYXlncmlkLWRvdC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZDpiZWZvcmUge1xuICAgIC8qIGV4cGFuZCBoaXQgYXJlYSAqL1xuICAgIHRvcDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQtZG90IHsgLyogdGhlIGFjdHVhbCBkb3QgKi9cbiAgbWFyZ2luOiAwIDRweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzNzg4ZDg7XG4gIGJvcmRlcjogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpIHNvbGlkIHZhcigtLWZjLWV2ZW50LWJvcmRlci1jb2xvciwgIzM3ODhkOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpO1xufVxuLyogLS0tIHNwYWNpbmcgYmV0d2VlbiB0aW1lIGFuZCB0aXRsZSAtLS0gKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQgLmZjLWV2ZW50LXRpbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../calendar/calendar.component */ "7mpd");
/* harmony import */ var _admin_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/doctor/doctor.component */ "Gsv1");
/* harmony import */ var _admin_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/nurse/nurse.component */ "A7+T");
/* harmony import */ var _admin_patient_patient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/patient/patient.component */ "XOEH");
/* harmony import */ var app_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/changepassword/changepassword.component */ "Hipp");












var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'table-list', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__["TableListComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
    { path: 'maps', component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"] },
    { path: 'doctor', component: _admin_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_8__["DoctorComponent"] },
    { path: 'nurse', component: _admin_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_9__["NurseComponent"] },
    { path: 'patient', component: _admin_patient_patient_component__WEBPACK_IMPORTED_MODULE_10__["PatientComponent"] },
    { path: 'changepassword', component: app_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_11__["ChangepasswordComponent"] },
];


/***/ }),

/***/ "smLI":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./table-list.component.html */ "Qd8X");
/* harmony import */ var _table_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-list.component.css */ "jxfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.ctorParameters = function () { return []; };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-table-list',
            template: _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_table_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ");
/* harmony import */ var _typography_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.css */ "Wwls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv");
/* harmony import */ var _maps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component.css */ "YpYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent.ctorParameters = function () { return []; };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maps',
            template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maps_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "vj1h":
/*!*****************************************!*\
  !*** ./src/app/models/registerModel.ts ***!
  \*****************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var Register = /** @class */ (function () {
    function Register(title, firstname, lastname, email, Dob, role, FullName, ContactNo, Address, Specialties, Status, Blocked_Unblocked, id, gender) {
        if (title === void 0) { title = ""; }
        if (firstname === void 0) { firstname = ""; }
        if (lastname === void 0) { lastname = ""; }
        if (email === void 0) { email = ""; }
        if (Dob === void 0) { Dob = ""; }
        if (role === void 0) { role = ""; }
        if (FullName === void 0) { FullName = ""; }
        if (ContactNo === void 0) { ContactNo = ""; }
        if (Address === void 0) { Address = ""; }
        if (Specialties === void 0) { Specialties = ""; }
        if (Status === void 0) { Status = ""; }
        if (Blocked_Unblocked === void 0) { Blocked_Unblocked = ""; }
        if (id === void 0) { id = 0; }
        if (gender === void 0) { gender = ""; }
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.Dob = Dob;
        this.role = role;
        this.FullName = FullName;
        this.ContactNo = ContactNo;
        this.Address = Address;
        this.Specialties = Specialties;
        this.Status = Status;
        this.Blocked_Unblocked = Blocked_Unblocked;
        this.id = id;
        this.gender = gender;
    }
    Object.defineProperty(Register.prototype, "Title", {
        get: function () { return this.title; },
        set: function (address) { this.title = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "FirstName", {
        get: function () { return this.firstname; },
        set: function (address) { this.firstname = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "LastName", {
        get: function () { return this.lastname; },
        set: function (address) { this.lastname = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Fullname", {
        get: function () { return this.FullName; },
        set: function (address) { this.FullName = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Email", {
        get: function () { return this.email; },
        set: function (address) { this.email = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "DOB", {
        get: function () { return this.Dob; },
        set: function (address) { this.Dob = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Role", {
        get: function () { return this.role; },
        set: function (address) { this.role = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Contactno", {
        get: function () { return this.ContactNo; },
        set: function (address) { this.ContactNo = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Addresss", {
        get: function () { return this.Address; },
        set: function (address) { this.Address = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Specialtiess", {
        get: function () { return this.Specialties; },
        set: function (address) { this.Specialties = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Statuss", {
        get: function () { return this.Status; },
        set: function (address) { this.Status = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "Blocked_unblocked", {
        get: function () { return this.Blocked_Unblocked; },
        set: function (address) { this.Blocked_Unblocked = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Register.prototype, "ID", {
        get: function () { return this.id; },
        set: function (address) { this.id = address; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Register;
}());

// export class Register{
//     constructor(
//         public title:string ="",
//         public firstname:string="",
//         public lastname:string="",
//         public email:string="",
//         public dob:string="",
//         public role:string = ""        
//      )
//     {
//     }
// get Title() { return this.title };
// set Title(address: string) { this.title = address };
// get FirstName() { return this.firstname };
// set FirstName(address: string) { this.firstname = address };
// get LastName() { return this.lastname };
// set LastName(address: string) { this.lastname = address };
// get Email() { return this.email };
// set Email(address: string) { this.email = address };
// get DOB() { return this.dob };
// set DOB(address: string) { this.dob = address };
// get Role() { return this.role };
// set Role(address: string) { this.role = address };
// }


/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map