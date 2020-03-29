using EmployeeModel;
using EmployeeRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManager
{
    /// <summary>
    /// implemented class
    /// </summary>
   public class EmployeeImpManager : IEmployeeManager
    {
        private readonly IEmployeeRepository repo;
        public EmployeeImpManager(IEmployeeRepository repo)
        {
            this.repo = repo;
        }
        public Task<int> AddEmployee(Employee employee)
        {
            return this.repo.AddEmployee(employee);
        }       
        public Task<int> DeleteEmployee(Employee employee)
        {
            return this.repo.DeleteEmployee(employee);
        }        
        public IEnumerable<Employee> GetAllEmployee()
        {
            return this.repo.GetAllEmployee();
        }
        
    }
}
