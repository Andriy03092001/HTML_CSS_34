using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebUserProfile.Models;

namespace WebUserProfile.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ContentResult SaveImageBase64(string uploadImage)
        {
            string json = "";
            
            string base64image = uploadImage.Split(',')[1];
            Bitmap imgCropped = base64image.FromBase64StringToBitmap();
            string path = Server.MapPath("~/UploadImages/");
            var fileName = Guid.NewGuid().ToString() + ".jpg";
            imgCropped.Save(path + fileName, ImageFormat.Jpeg);
            json = JsonConvert.SerializeObject(
                fileName
            );

            return Content(json, "application/json");
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}