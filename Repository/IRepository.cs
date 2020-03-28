using System;
using Model;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
   public interface IRepository
    {
        public Task<int> GetEmployee(int id);
       public IEnumerable<Task<int>> GetAllEmployee();

        public Task<int> AddEmployee(Employee employee);
        public Task<int> UpdateEmployee(Employee employee);
        public Task<int> DeleteEmployee(Employee employee);
        
    }
}
