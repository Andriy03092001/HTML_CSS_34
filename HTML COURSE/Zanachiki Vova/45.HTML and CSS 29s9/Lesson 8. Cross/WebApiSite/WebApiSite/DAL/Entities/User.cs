using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiSite.DAL.Entities
{
    [Table("tblUsers")]
    public class UserEF
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(maximumLength:255)]
        public string Name { get; set; }
        [StringLength(maximumLength: 255)]
        public string Image { get; set; }
        [Required, StringLength(maximumLength: 255)]
        public string Email { get; set; }
    }
}