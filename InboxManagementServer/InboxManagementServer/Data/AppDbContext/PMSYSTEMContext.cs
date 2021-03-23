using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using InboxManagementServer.Models;

#nullable disable

namespace InboxManagementServer.Data.AppDbContext
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

        public virtual DbSet<AllergyMaster> AllergyMasters { get; set; }
        public virtual DbSet<Appointment> Appointments { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRole> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }
        public virtual DbSet<DeviceCode> DeviceCodes { get; set; }
        public virtual DbSet<Diagnosis> Diagnoses { get; set; }
        public virtual DbSet<DiagnosisMaster> DiagnosisMasters { get; set; }
        public virtual DbSet<DoctorMaster> DoctorMasters { get; set; }
        public virtual DbSet<DoctorspecialityMapping> DoctorspecialityMappings { get; set; }
        public virtual DbSet<DrugMaster> DrugMasters { get; set; }
        public virtual DbSet<Medication> Medications { get; set; }
        public virtual DbSet<MedicineMaster> MedicineMasters { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<NurseMaster> NurseMasters { get; set; }
        public virtual DbSet<PatientAllergy> PatientAllergies { get; set; }
        public virtual DbSet<PatientEmergencyContact> PatientEmergencyContacts { get; set; }
        public virtual DbSet<PatientMaster> PatientMasters { get; set; }
        public virtual DbSet<PatientVitalSign> PatientVitalSigns { get; set; }
        public virtual DbSet<PersistedGrant> PersistedGrants { get; set; }
        public virtual DbSet<Procedure> Procedures { get; set; }
        public virtual DbSet<ProcedureMaster> ProcedureMasters { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<SpecialityMaster> SpecialityMasters { get; set; }
        public virtual DbSet<UserLoginDetail> UserLoginDetails { get; set; }
        public virtual DbSet<UserRoleMapping> UserRoleMappings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("data source=IMCJBCP84-MSL1\\SQLEXPRESS2018;Initial Catalog=PMSYSTEM;integrated security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AllergyMaster>(entity =>
            {
                entity.ToTable("AllergyMaster");

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
                entity.ToTable("Appointment");

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
                    .WithMany(p => p.Appointments)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__Appointme__Docto__6E01572D");
            });

            modelBuilder.Entity<AspNetRole>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetRoleClaim>(entity =>
            {
                entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetUser>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaim>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRole>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId, "IX_AspNetUserRoles_RoleId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<DeviceCode>(entity =>
            {
                entity.HasKey(e => e.UserCode);

                entity.HasIndex(e => e.DeviceCode1, "IX_DeviceCodes_DeviceCode")
                    .IsUnique();

                entity.Property(e => e.UserCode).HasMaxLength(200);

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.DeviceCode1)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("DeviceCode");

                entity.Property(e => e.SubjectId).HasMaxLength(200);
            });

            modelBuilder.Entity<Diagnosis>(entity =>
            {
                entity.ToTable("Diagnosis");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Diagnoses)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Diagnosis__Appoi__74AE54BC");

                entity.HasOne(d => d.DiagnosisNavigation)
                    .WithMany(p => p.Diagnoses)
                    .HasForeignKey(d => d.DiagnosisId)
                    .HasConstraintName("FK__Diagnosis__Diagn__74AE54BC");
            });

            modelBuilder.Entity<DiagnosisMaster>(entity =>
            {
                entity.ToTable("DiagnosisMaster");

                entity.Property(e => e.DiagnosisCode)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("Diagnosis_Code");

                entity.Property(e => e.DiagnosisDescription)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("Diagnosis_Description");

                entity.Property(e => e.DiagnosisIsDepricated).HasColumnName("Diagnosis_Is_Depricated");

                entity.Property(e => e.Diagnosystype)
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<DoctorMaster>(entity =>
            {
                entity.ToTable("DoctorMaster");

                entity.Property(e => e.Address).HasMaxLength(255);

                entity.Property(e => e.City).HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.DoctorDisplayId)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("DoctorDisplayID");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

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

                entity.Property(e => e.PhoneNo).HasMaxLength(255);

                entity.Property(e => e.Speciality).HasMaxLength(255);

                entity.Property(e => e.Title).HasMaxLength(255);

                entity.Property(e => e.UserLoginDetailsId)
                    .HasMaxLength(450)
                    .HasColumnName("UserLoginDetailsID");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.DoctorMasters)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__DoctorMas__UserL__17036CC0");
            });

            modelBuilder.Entity<DoctorspecialityMapping>(entity =>
            {
                entity.ToTable("DoctorspecialityMapping");

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
                    .WithMany(p => p.DoctorspecialityMappings)
                    .HasForeignKey(d => d.DoctorId)
                    .HasConstraintName("FK__Doctorspe__Docto__797309D9");

                entity.HasOne(d => d.Sp)
                    .WithMany(p => p.DoctorspecialityMappings)
                    .HasForeignKey(d => d.SpId)
                    .HasConstraintName("FK__Doctorspec__SpId__7A672E12");
            });

            modelBuilder.Entity<DrugMaster>(entity =>
            {
                entity.ToTable("DrugMaster");

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
                entity.ToTable("Medication");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.HasOne(d => d.Appointment)
                    .WithMany(p => p.Medications)
                    .HasForeignKey(d => d.AppointmentId)
                    .HasConstraintName("FK__Medicatio__Appoi__7B5B524B");

                entity.HasOne(d => d.MedicationNavigation)
                    .WithMany(p => p.Medications)
                    .HasForeignKey(d => d.MedicationId)
                    .HasConstraintName("FK__Medicatio__Medic__3C34F16F");
            });

            modelBuilder.Entity<MedicineMaster>(entity =>
            {
                entity.ToTable("MedicineMaster");

                entity.Property(e => e.MedicineIsDeprecated).HasColumnName("Medicine_IsDeprecated");

                entity.Property(e => e.MedicineStrength)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("Medicine_Strength");
            });

            modelBuilder.Entity<Notification>(entity =>
            {
                entity.ToTable("Notification");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedOn).HasColumnType("datetime");

                entity.Property(e => e.UserLoginDetailsId)
                    .HasMaxLength(450)
                    .HasColumnName("UserLoginDetailsID");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.Notifications)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__Notificat__UserL__2739D489");
            });

            modelBuilder.Entity<NurseMaster>(entity =>
            {
                entity.ToTable("NurseMaster");

                entity.Property(e => e.Address).HasMaxLength(255);

                entity.Property(e => e.City).HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

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
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("NurseDisplayID");

                entity.Property(e => e.PhoneNo).HasMaxLength(255);

                entity.Property(e => e.Title).HasMaxLength(255);

                entity.Property(e => e.UserLoginDetailsId)
                    .HasMaxLength(450)
                    .HasColumnName("UserLoginDetailsID");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.NurseMasters)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__NurseMast__UserL__17F790F9");
            });

            modelBuilder.Entity<PatientAllergy>(entity =>
            {
                entity.ToTable("PatientAllergy");

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
                    .WithMany(p => p.PatientAllergies)
                    .HasForeignKey(d => d.AllergyId)
                    .HasConstraintName("FK__PatientAl__Aller__00200768");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientAllergies)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientAl__Patie__01142BA1");
            });

            modelBuilder.Entity<PatientEmergencyContact>(entity =>
            {
                entity.ToTable("PatientEmergencyContact");

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
                    .WithMany(p => p.PatientEmergencyContacts)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientEm__Patie__02084FDA");
            });

            modelBuilder.Entity<PatientMaster>(entity =>
            {
                entity.ToTable("PatientMaster");

                entity.Property(e => e.Address)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.City).HasMaxLength(255);

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedOn).HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

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
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PatientDisplayID");

                entity.Property(e => e.PhoneNo).HasMaxLength(255);

                entity.Property(e => e.Race)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Title).HasMaxLength(255);

                entity.Property(e => e.UserLoginDetailsId)
                    .HasMaxLength(450)
                    .HasColumnName("UserLoginDetailsID");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.PatientMasters)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__PatientMa__UserL__160F4887");
            });

            modelBuilder.Entity<PatientVitalSign>(entity =>
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
                    .HasConstraintName("FK__PatientVi__Appoi__03F0984C");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.PatientVitalSigns)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__PatientVi__Patie__04E4BC85");
            });

            modelBuilder.Entity<PersistedGrant>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.HasIndex(e => new { e.SubjectId, e.ClientId, e.Type }, "IX_PersistedGrants_SubjectId_ClientId_Type");

                entity.Property(e => e.Key).HasMaxLength(200);

                entity.Property(e => e.ClientId)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Data).IsRequired();

                entity.Property(e => e.SubjectId).HasMaxLength(200);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Procedure>(entity =>
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
                    .HasConstraintName("FK__Procedure__Appoi__05D8E0BE");

                entity.HasOne(d => d.ProcedureNavigation)
                    .WithMany(p => p.Procedures)
                    .HasForeignKey(d => d.ProcedureId)
                    .HasConstraintName("FK__Procedure__Proce__05D8E0BE");
            });

            modelBuilder.Entity<ProcedureMaster>(entity =>
            {
                entity.ToTable("ProcedureMaster");

                entity.Property(e => e.ProcedureCode)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("Procedure_Code");

                entity.Property(e => e.ProcedureDescription)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("Procedure_Description");

                entity.Property(e => e.ProcedureIsDepricated).HasColumnName("Procedure_Is_Depricated");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

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
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Role");
            });

            modelBuilder.Entity<SpecialityMaster>(entity =>
            {
                entity.ToTable("SpecialityMaster");

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

            modelBuilder.Entity<UserLoginDetail>(entity =>
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
                    .WithMany(p => p.UserRoleMappings)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK__User_Role__Role___07C12930");

                entity.HasOne(d => d.UserLoginDetails)
                    .WithMany(p => p.UserRoleMappings)
                    .HasForeignKey(d => d.UserLoginDetailsId)
                    .HasConstraintName("FK__User_Role__UserL__08B54D69");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
