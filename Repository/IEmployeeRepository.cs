using System;
using EmployeeModel;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeRepository
{
    /// <summary>
    /// repository interface
    /// </summary>
   public interface IEmployeeRepository
    {
        Employee GetEmployee(int id);
        IEnumerable<Employee> GetAllEmployee();

        Task<int> AddEmployee(Employee employee);
        Task<int> UpdateEmployee(Employee employee);
        Task<int> DeleteEmployee(Employee employee);
        
    }
}
