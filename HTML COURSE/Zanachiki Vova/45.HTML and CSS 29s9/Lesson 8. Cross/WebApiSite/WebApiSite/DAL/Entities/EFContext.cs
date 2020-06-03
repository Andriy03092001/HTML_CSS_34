using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApiSite.DAL.Entities
{
    public class EFContext : DbContext
    {
        public EFContext(): base("MyConStr")
        {

        }
        public DbSet<UserEF> Users { get; set; }
    }
}