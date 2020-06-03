using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApiSite.DAL.Entities;
using WebApiSite.Models;

namespace WebApiSite.Controllers
{
    //[]
    public class UserController : Controller
    {
        // GET: User
        [HttpGet]
        public ContentResult Index()
        {
            string json = "";
            UserItemViewModel user = new UserItemViewModel
            {
                Id = 1,
                Email = "slavik@ukr.net",
                Image = "Hello"
            };
            List<UserItemViewModel> list = new List<UserItemViewModel>();
            list.Add(user);
            json = JsonConvert.SerializeObject(
                new
                {
                    success = 1,
                    users = list
                });
            return Content(json, "application/json");
        }
        [HttpPost]
        public ContentResult Add(UserAddViewModel model)
        {

            string json = "";
            if(ModelState.IsValid)
            {
                UserEF user = new UserEF()
                {
                    Email = model.Email,
                    Image = model.Image,
                    Name = model.Email
                };
                using (EFContext context = new EFContext())
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                    json = JsonConvert.SerializeObject(
                            new
                            {
                                success = user.Id
                            });
                }
            }
            else
            {
                json = JsonConvert.SerializeObject(
                        new
                        {
                            success = 0
                        });
            }

            return Content(json, "application/json");
        }
    }
}