using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApiSite.Models
{
    public class UserItemViewModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
    }
    public class UserAddViewModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Image { get; set; }
    }
}