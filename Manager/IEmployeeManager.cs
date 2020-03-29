using System;
using EmployeeModel;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManager
{
    /// <summary>
    /// interface
    /// </summary>
  public interface IEmployeeManager
    {
        Task<int> AddEmployee(Employee employee);
         Task<int> DeleteEmployee(Employee employee);
         IEnumerable<Employee> GetAllEmployee();

    }
}
