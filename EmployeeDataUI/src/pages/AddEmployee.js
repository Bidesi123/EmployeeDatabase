import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default class AddEmployee extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:''
        }
        this.state={snackbaropen:false,snackbarmsg:''};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});
    };

    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }
     handleSubmit=(event)=> {
        event.preventDefault();
        axios.post(`https://localhost:44334/api/Employee/AddEmployee`, this.state )      
      .then(res => {
          //alert("adeed succefully");
          this.setState({snackbaropen:true,snackbarmsg:'adeed succefully'})
        //console.log(res);
        //console.log(res.data);
      })
      .catch(error=>{
        this.setState({snackbaropen:true,snackbarmsg:'failed'})
         // console.log(error);
      })
    }
    render() {
        const {firstName,lastName,phoneNumber,email}=this.state
        return (
            <div className='container'>
            <Snackbar
                anchorOrigin={{vertical:'centre',horizontal:'centre'}}
                open={this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                 message={<span id='message-id'>{this.state.snackbarmsg}</span>}
                 action={[
                     <IconButton
                     key="close"
                     arial-label="close"
                     color="inherit"
                     onClick={this.snackbarClose} 
                     >
                        x                      
                     </IconButton>
                 ]}
            />
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton className="addEmp-div">
                    <Modal.Title  id="contained-modal-title-vcenter">
                        AddEmployee
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add-div">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                First Name:
                                <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />
                            </label>
                            <label>
                                LastName:
                                <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
                            </label>
                            <label>
                                PhoneNumber:
                                <input type="number" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" value={email} onChange={this.handleChange} />
                            </label>
                            <br/>
                            <button type="submit" >Add</button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Ok</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}