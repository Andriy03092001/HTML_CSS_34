using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebSiteApi.Entities;
using WebSiteApi.Models;

namespace WebSiteApi.Controllers
{
    public class RoleController : Controller
    {
        [HttpPost]
        public ActionResult Create(RoleCreateViewModel model)
        {
            string json="";
            Role role = new Role
            {
                Name=model.Name,
                Description=model.Description
            };
            using (EFContext context = new EFContext())
            {
                context.Roles.Add(role);
                context.SaveChanges();
                json = JsonConvert.SerializeObject(
                    new {
                        Id=role.Id
                    });
            }
            return Content(json, "application/json");
        }
    }
}