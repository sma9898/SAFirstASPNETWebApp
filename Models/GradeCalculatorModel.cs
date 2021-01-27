using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SAFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required] //Data validation
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double AssignmentsPct { get; set; } //Use name attribute
        
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double GroupProjectPct { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double QuizzesPct { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double ExamsPct { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double IntexPct { get; set; }

        public double FinalPercent { get; set; }
        public string FinalGrade { get; set; }
    }
}
