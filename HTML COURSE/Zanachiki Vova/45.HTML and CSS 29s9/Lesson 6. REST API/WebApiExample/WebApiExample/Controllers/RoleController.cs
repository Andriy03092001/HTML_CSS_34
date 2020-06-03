using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiExample.Controllers
{
    class MyRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class RoleController : Controller
    {
        // GET: Role
        public ContentResult List()
        {
            string json = "";
            var list = new List<MyRole>
            {
                new MyRole
                {
                    Id=2,
                    Name="Дроздофіл"
                },
                new MyRole
                {
                    Id=4,
                    Name="Адмін"
                },
                new MyRole
                {
                    Id=12,
                    Name="Бугалтер"
                }
            };
            json = JsonConvert.SerializeObject(
                new
                {
                    Result = 1,
                    Roles=list
                });
            return Content(json, "application/json");
        }
    }
}