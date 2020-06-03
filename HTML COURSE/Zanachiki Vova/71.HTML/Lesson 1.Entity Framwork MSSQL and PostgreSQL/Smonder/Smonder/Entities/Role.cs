﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smonder.Entities
{
    [Table("tblRoles")]
    public class Role
    {
        [Key]
        public long Id { get; set; }
        [Required, StringLength(maximumLength: 255)]
        public string Name { get; set; }
        [StringLength(1000)]
        public string Desctiption { get; set; }

    }
}
