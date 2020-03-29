using EmployeeModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeRepository
{
    /// <summary>
    /// repository implemented class
    /// </summary>
    public class EmployeeImpRepository : IEmployeeRepository
    {
        private readonly EmployeeContext employeeContext;
        public EmployeeImpRepository(EmployeeContext employeeContext)
        {
            this.employeeContext = employeeContext;
        }
        public Employee GetEmployee(int id)
        {
           return employeeContext.Employees.Find(id);
        }
        public Task<int> AddEmployee(Employee employee)
        {
           employeeContext.Employees.Add(employee);
           var result= employeeContext.SaveChangesAsync();
           return result;           
        }
        public Task<int> UpdateEmployee(Employee NewEmployee)
        {
            var employee = employeeContext.Employees.Attach(NewEmployee);
            employee.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            var result = employeeContext.SaveChangesAsync();
            return result;
        }
        public Task<int> DeleteEmployee(Employee employee)
        {
            employeeContext.Employees.Remove(employee);
            var result = employeeContext.SaveChangesAsync();
            return result;
        }
       public IEnumerable<Employee> GetAllEmployee()
        {
            return employeeContext.Employees;
        }
    }
}
