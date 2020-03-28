using Model;
using Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manager
{
    class ImpManager : IManager
    {
        private readonly IRepository repo;
        public ImpManager(IRepository repo)
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
        public IEnumerable<Task<int>> GetAllEmployee()
        {
            return this.repo.GetAllEmployee();
        }

    }
}
