using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppsLab6.DTOs
{
    public class RegisterUserDTO
    {
        [Display(Name = "User Name")]
        [Required(ErrorMessage = "{0} is required")]
        public string UserName { get; set; }

        [MinLength(6, ErrorMessage = "{0} must be at least {1} characters long")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }

        [Display(Name = "Name")]
        [Required(ErrorMessage = "{0} is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Birthday is required")]
        public DateTime BirthDate { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public string City { get; set; }
    }
}