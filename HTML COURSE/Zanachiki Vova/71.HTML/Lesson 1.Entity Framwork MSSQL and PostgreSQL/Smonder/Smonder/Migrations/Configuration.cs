namespace Smonder.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Smonder.Entities.EFContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Smonder.Entities.EFContext context)
        {
            context.Roles.AddOrUpdate(r => r.Id,
                new Entities.Role
                {
                    Id = 1,
                    Name = "Admin",
                    Desctiption = "Патрон, галавар банди"
                });

            context.Roles.AddOrUpdate(r => r.Id,
                new Entities.Role
                {
                    Id = 2,
                    Name = "Manager",
                    Desctiption = "Подрушка адміна"
                });

            context.Roles.AddOrUpdate(r => r.Id,
                new Entities.Role
                {
                    Id = 3,
                    Name = "Boker",
                    Desctiption = "Нараховує зарплату пацанам"
                });
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
