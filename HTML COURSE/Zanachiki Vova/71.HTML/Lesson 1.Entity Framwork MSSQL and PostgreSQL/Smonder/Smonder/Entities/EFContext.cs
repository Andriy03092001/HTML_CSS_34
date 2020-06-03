using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smonder.Entities
{
    public class EFContext : DbContext
    {
        public EFContext() : base("SmonderNpgsqlConnection")
        {

        }
        //Список ролей користувачів
        public DbSet<Role> Roles { get; set; }
    }
}
