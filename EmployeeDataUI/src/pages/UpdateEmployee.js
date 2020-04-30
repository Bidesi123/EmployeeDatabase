import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {

            employeeId: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: ''
        }
        // this.state = { snackbaropen: false, snackbarmsg: '' };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // snackbarClose = (event) => {
    //     this.setState({ snackbaropen: false });
    // };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

//  onSubmit = (event) => {
//       event.preventDefault();
//       axios.put(`https://localhost:44334/api/Employee/UpdateEmployee`, this.state)
//         .then(res => {
//             //alert("adeed succefully");
//             this.setState({ snackbaropen: true, snackbarmsg: 'updated succefully' })
//            // console.log(res);
//             //console.log(res.data);
//         })
//         .catch(error => {
//             this.setState({ snackbaropen: true, snackbarmsg: 'failed' })
//             //console.log(error);
//         })
//     }
onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  
    axios.put('https://localhost:44334/api/Employee/UpdateEmployee', this.state)

            .then(response => {
        console.log(response)
    })
        .catch(error => { alert("invalid-id") })

}

  render() {
    const { employeeId, firstName, lastName, phoneNumber, email } = this.state
    return (
        <div className='container'>
            <Snackbar
                anchorOrigin={{ vertical: 'centre', horizontal: 'centre' }}
                open={this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                message={<span id='message-id'>{this.state.snackbarmsg}</span>}
                action={[
                    <IconButton key="close" arial-label="close" color="inherit" onClick={this.snackbarClose}>x
                             </IconButton>]}
            />
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton className="addEmp-div">
                    <Modal.Title id="contained-modal-title-vcenter">
                        UpdateEmployee
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='main-add-div'>
                        <h2>update the Employee</h2>
                        <div className='add-container'>
                            <h2>Enter the id of employee that you wanna update</h2>
                            <form className='add-form' onSubmit={this.onSubmit}>
                                <div className='aligment'>
                                    <div className='employeeId'>EmployeeId</div>
                                    <input type='number' className="add-firstname" name='employeeId' value={employeeId} onChange={this.onChange} />
                                </div>   <br />
                                <div className='aligment'>
                                    <div className='firstName'>FirstName</div>
                                    <input type='text' className="add-firstname" name='firstName' value={firstName} onChange={this.onChange} />
                                </div> <br />
                                <div className='aligment'>
                                    <div className='firstName'>LastName</div>
                                    <input type='text' className="add-firstname" name='lastName' value={lastName} onChange={this.onChange} />
                                </div>
                                <br />
                                <div className='aligment'>
                                    <div className='phoneNumber'>PhoneNumber</div>
                                    <input type='text' className="add-firstname" name='phoneNumber' value={phoneNumber} onChange={this.onChange} />
                                </div><br />       
                                <div className='aligment'>
                                    <div className='email'>Email</div>
                                    <input type='email' className="firstname" name='email' value={email} onChange={this.onChange} />
                                </div><br />                              
                                <div className='submit-box'>
                                    <input type='submit' name='submit' className='submit-text' />
                                </div>
                            </form>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

}

