using EmployeeModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EmployeeRepository
{
    /// <summary>
    /// employee context class
    /// </summary>
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> option) : base(option)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
