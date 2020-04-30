import React, { Component } from 'react'
//import {Table} from 'react-bootstrap'
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddEmployee from './AddEmployee'
import UpdateEmployee from './UpdateEmployee'
//import Delete from './delete'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { employees: [], addEmployeeShow: false, updateEmployeeShow: false }

    }
    componentDidMount() {
        axios.get('https://localhost:44334/api/Employee/GetAllEmployee')
            .then(response => {
                this.setState({ employees: response.data });
                //console.log(response.data);
            });
    }

    componentDidUpdate() {
        this.componentDidMount();
    }
    deleteEmp(employeeId) {
        this.setState({ employeeId: this.state.employees[0] })
        //console.log(employeeId);
        if (window.confirm('are you sure ?')) {
            axios.delete(`https://localhost:44334/api/Employee/DeleteEmployee?id=${employeeId}`)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
    }

    // getEmployee(){
    //    fetch('https://localhost:44334/api/Employee/GetAllEmployee')
    //    .then(response=>response.json)
    //    .then(data=>{
    //        this.setState({employees:data})
    //    });
    // }
    render() {
        const { employees, employeeId, firstName, lastName, phoneNumber, email } = this.state;

        let addEmployeeClose = () => this.setState({ addEmployeeShow: false });
        let updateEmployeeClose = () => this.setState({ updateEmployeeShow: false });
        return (
            <div>
                <div className='head-div'>
                    <h1 className='sentence1-div'>WELCOME</h1><br/>
                    <h1 className='sentence2-div'>EMPLOYEE CRUD PAGE</h1>
                </div>
                <ButtonToolbar className="Add-btn">
                    <Button className='' variant="primary" onClick={() => this.setState({ addEmployeeShow: true })}>AddEmployee</Button>
                    <AddEmployee show={this.state.addEmployeeShow}
                        onHide={addEmployeeClose}
                    />
                </ButtonToolbar>
                <table className="empTable" striped border hover size="sm" border="1">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>PhoneNumber</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(emp =>
                            <tr>
                                <td>{emp.employeeId}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.phoneNumber}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='update-btn' variant='info'
                                            onClick={() => this.setState({
                                                updateEmployeeShow: true,
                                                empId: emp.employeeId, firstName: emp.firstName, lastName: emp.lastName,
                                                phoneNumber: emp.phoneNumber, email: emp.email
                                            })}
                                        >
                                            Update
                                        </Button>

                                        <UpdateEmployee
                                            show={this.state.updateEmployeeShow}
                                            onHide={updateEmployeeClose}
                                            employeeId={employeeId}
                                            firstName={firstName}
                                            lastName={lastName}
                                            phoneNumber={phoneNumber}
                                            email={email} />
                                    </ButtonToolbar>
                                </td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='delete-btn' onClick={() => this.deleteEmp(emp.employeeId)}
                                            variant='danger'>
                                            Delete
                                </Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}
