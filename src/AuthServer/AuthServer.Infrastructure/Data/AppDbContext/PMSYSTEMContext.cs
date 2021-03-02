using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AuthServer.Infrastructure.Models
{
    public partial class PMSYSTEMContext : DbContext
    {
        public PMSYSTEMContext()
        {
        }

        public PMSYSTEMContext(DbContextOptions<PMSYSTEMContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AllergyMaster> AllergyMaster { get; set; }
        public virtual DbSet<Appointment> Appointment { get; set; }
        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<DeviceCodes> DeviceCodes { get; set; }
        public virtual DbSet<Diagnosis> Diagnosis { get; set; }
        public virtual DbSet<DiagnosisMaster> DiagnosisMaster { get; set; }
        public virtual DbSet<DoctorMaster> DoctorMaster { get; set; }
        public virtual DbSet<DoctorspecialityMapping> DoctorspecialityMapping { get; set; }
        public virtual DbSet<DrugMaster> DrugMaster { get; set; }
        public virtual DbSet<Medication> Medication { get; set; }
        public virtual DbSet<Notification> Notification { get; set; }
        public virtual DbSet<NurseMaster> NurseMaster { get; set; }
        public virtual DbSet<PatientAllergy> PatientAllergy { get; set; }
        public virtual DbSet<PatientEmergencyContact> PatientEmergencyContact { get; set; }
        public virtual DbSet<PatientMaster> PatientMaster { get; set; }
        public virtual DbSet<PatientVitalSigns> PatientVitalSigns { get; set; }
        public virtual DbSet<PersistedGrants> PersistedGrants { get; set; }
        public virtual DbSet<ProcedureMaster> ProcedureMaster { get; set; }
        public virtual DbSet<Procedures> Procedures { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<SpecialityMaster> SpecialityMaster { get; set; }
        public virtual DbSet<UserLoginDetails> UserLoginDetails { get; set; }
        public virtual DbSet<UserRoleMapping> UserRoleMapping { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-Q4OMBM2;Database=PMSYSTEM;Trusted_Connection=True;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<AllergyMaster>(entity =>
            {
                entity.Property(e => e.AllergyClinicalInformation).IsUnicode(false);

                entity.Property(e => e.AllergyDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.AllergyName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AllergyType)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");
            });

            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.Property(e => e.AppointmentTitle)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.Duration)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.Notes)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.RespondedOn).HasColumnType("date");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__Appointme__Docto__47DBAE45");
            });

            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId);

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<DeviceCodes>(entity =>
            {
                entity.HasKey(e => e.UserCode);

                entity.HasIndex(e => e.DeviceCode)
                    .IsUnique();

                entity.Property(e => e.UserCode)
                    .HasMaxLength(200)
                    .ValueGeneratedNever();

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.DeviceCode)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.SubjectId).HasMaxLength(200);
            });

            modelBuilder.Entity<Diagnosis>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Diagnosis)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Diagnosis__Appoi__17F790F9");

                entity.HasOne(d => d.DiagnosisNavigation)
                    .WithMany(p => p.Diagnosis)
                    .HasForeignKey(d => d.DiagnosisId)
                    .HasConstraintName("FK__Diagnosis__Diagn__74AE54BC");
            });

            modelBuilder.Entity<DiagnosisMaster>(entity =>
            {
                entity.Property(e => e.DiagnosisCode)
                    .HasColumnName("Diagnosis_Code")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DiagnosisDescription)
                    .HasColumnName("Diagnosis_Description")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.DiagnosisIsDepricated).HasColumnName("Diagnosis_Is_Depricated");

                entity.Property(e => e.Diagnosystype)
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DoctorMaster>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.DoctorDisplayId)
                    .HasColumnName("DoctorDisplayID")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .HasColumnName("EmailID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.UserLoginDetailsId)
                    .HasColumnName("UserLoginDetailsID")
                    .HasMaxLength(450);

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.DoctorMaster)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__DoctorMas__UserL__531856C7");
            });

            modelBuilder.Entity<DoctorspecialityMapping>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.DoctorspecialityMapping)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__Doctorspe__Docto__534D60F1");

                entity.HasOne(d => d.Sp)
                    .WithMany(p => p.DoctorspecialityMapping)
                    .HasForeignKey(d => d.SpId)
                    .HasConstraintName("FK__Doctorspec__SpId__52593CB8");
            });

            modelBuilder.Entity<DrugMaster>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.DrugForm)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugGenericName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugManufacturerName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DrugStrength)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");
            });

            modelBuilder.Entity<Medication>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Dosage)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Medication1)
                    .HasColumnName("Medication")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Medication)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Medicatio__Appoi__4CA06362");
            });

            modelBuilder.Entity<Notification>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.DoctorId).HasColumnName("DoctorID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Notification)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Notificat__Appoi__5DCAEF64");

                entity.HasOne(d => d.Doctor)
                    .WithMany(p => p.Notification)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__Notificat__Docto__5CD6CB2B");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Notification)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK_Ntf_Pts");
            });

            modelBuilder.Entity<NurseMaster>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.EmailId)
                    .HasColumnName("EmailID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.NurseDisplayId)
                    .HasColumnName("NurseDisplayID")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserLoginDetailsId)
                    .HasColumnName("UserLoginDetailsID")
                    .HasMaxLength(450);

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.NurseMaster)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__NurseMast__UserL__55F4C372");
            });

            modelBuilder.Entity<PatientAllergy>(entity =>
            {
                entity.Property(e => e.AllergyId).HasColumnName("AllergyID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.HasOne(d => d.Allergy)
                    .WithMany(p => p.PatientAllergy)
                    .HasForeignKey(d => d.AllergyId)
                    .HasConstraintName("FK__PatientAl__Aller__6E01572D");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientAllergy)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientAl__Patie__4F7CD00D");
            });

            modelBuilder.Entity<PatientEmergencyContact>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.Relationship)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientEmergencyContact)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientEm__Patie__4D94879B");
            });

            modelBuilder.Entity<PatientMaster>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.EmailId)
                    .HasColumnName("EmailID")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Ethnicity)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LanguagesKnown)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PatientDisplayId)
                    .HasColumnName("PatientDisplayID")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Race)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserLoginDetailsId)
                    .HasColumnName("UserLoginDetailsID")
                    .HasMaxLength(450);

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.PatientMaster)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__PatientMa__UserL__5224328E");
            });

            modelBuilder.Entity<PatientVitalSigns>(entity =>
            {
                entity.Property(e => e.BodyTemperature).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Height).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.PatientId).HasColumnName("PatientID");

                entity.Property(e => e.Weight).HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.PatientVitalSigns)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__PatientVi__Appoi__5070F446");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientVitalSigns)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientVi__Patie__4E88ABD4");
            });

            modelBuilder.Entity<PersistedGrants>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.HasIndex(e => new { e.SubjectId, e.ClientId, e.Type });

                entity.Property(e => e.Key)
                    .HasMaxLength(200)
                    .ValueGeneratedNever();

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.SubjectId).HasMaxLength(200);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ProcedureMaster>(entity =>
            {
                entity.Property(e => e.ProcedureCode)
                    .HasColumnName("Procedure_Code")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ProcedureDescription)
                    .HasColumnName("Procedure_Description")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ProcedureIsDepricated).HasColumnName("Procedure_Is_Depricated");
            });

            modelBuilder.Entity<Procedures>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Procedures)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Procedure__Appoi__4BAC3F29");

                entity.HasOne(d => d.Procedure)
                    .WithMany(p => p.Procedures)
                    .HasForeignKey(d => d.ProcedureId)
                    .HasConstraintName("FK__Procedure__Proce__05D8E0BE");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Desc)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.Role1)
                    .HasColumnName("Role")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SpecialityMaster>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.SpDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserLoginDetails>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserRoleMapping>(entity =>
            {
                entity.ToTable("User_Role_Mapping");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.RoleId).HasColumnName("Role_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserRoleMapping)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK__User_Role__Role___46E78A0C");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.UserRoleMapping)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__User_Role__UserL__45F365D3");
            });
        }
    }
}
