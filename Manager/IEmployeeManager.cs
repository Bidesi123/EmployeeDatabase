using System;
using Model;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager
{
  public interface IManager
    {
       public Task<int> AddEmployee(Employee employee);
        public Task<int> DeleteEmployee(Employee employee);
        public IEnumerable<Task<int>> GetAllEmployee();

    }
}
