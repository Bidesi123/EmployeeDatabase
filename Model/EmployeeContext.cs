using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public class EmployeeContext :DbContext
    {
        /*public EmployeeContext(DbContextOptions<EmployeeContext> option) : base(option)
        {

        }*/
        /// <summary>
        /// overidden method
        /// </summary>
        /// <param name="optionBuilder"></param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Integrated Security=True");
        }
        public DbSet<Employee> Employees { get; set; }
    }
}
