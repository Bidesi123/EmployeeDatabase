using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EmployeeManager;
using EmployeeModel;


namespace EmployeeData.Controllers
{
    /// <summary>
    /// controller class
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        public readonly IEmployeeManager manager;
        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="manager"></param>
        public EmployeeController(IEmployeeManager manager)
        {
            this.manager = manager;
        }
        /// <summary>
        /// Manager interface implementeed method
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        [Route("AddEmployee")]
        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employee)
        {
            var result = await this.manager.AddEmployee(employee);
            if (result == 1)
            {
                return this.Ok(employee);
            }
            else
            {
                return this.BadRequest();
            }
        }
        [Route("DeleteEmployee")]
        [HttpDelete]
        public async Task<ActionResult> DeleteEmployee(Employee employee)
        {
            var result = await this.manager.DeleteEmployee(employee);
            if (result == 1)
            {
                return this.Ok(employee);
            }
            else
            {
                return this.BadRequest();
            }
        }
        [Route("GetAllEmployee")]
        [HttpGet]
        public IEnumerable<Employee> GetAllEmployee()
        {
            return this.manager.GetAllEmployee();
        }
    }
}