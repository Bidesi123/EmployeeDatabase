using Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class ImpRepository : IRepository
    {
        private readonly EmployeeContext employeeContext;
        public ImpRepository(EmployeeContext employeeContext)
        {
            this.employeeContext = employeeContext;
        }
        public Task<int> GetEmployee(int id)
        {
            EmployeeContext.Employees.Find(id);

        }
        public Task<int> AddEmployee(Employee employee)
        {
           employeeContext.Employees.Add(employee);
           var result= employeeContext.SaveChangesAsync();
           return result;           
        }
        public Task<int> UpdateEmployee(Employee employee)
        {
            
        }
        public Task<int> DeleteEmployee(Employee employee)
        {
            employeeContext.Employees.Remove(employee);
            var result = employeeContext.SaveChangesAsync();
            return result;
        }

        IEnumerable<Task<int>> IRepository.GetAllEmployee()
        {
            throw new NotImplementedException();
        }
    }
}
