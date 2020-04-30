import React from 'react'
import axios from 'axios'
import {Button,ButtonToolbar} from 'react-bootstrap';

export default class Delete extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            employee:[]            
        }
    }

   onChange=(e)=>this.setState({employeeid : e.target.value})

    onSubmit=(e)=>{
        e.preventDefault();
        //this.setState();
        console.log(this.state.id);
        
        axios.delete(`https://localhost:44334/api/Employee/DeleteEmployee/${this.state.EmployeeId}`)
        .then(response=>{
            console.log(response);
        })
        .catch(error => { console.log(error) })
    }
    
    render(){
        
    return (
        <div>
            
            <form className='form-delete' >
                <div>
                    <ButtonToolbar>
                        {/* <label className='delete-id' name='ID'>id   </label>
                        <input type='text'  placeholder='input-id plzz '  value={this.state.id}  onChange={this.onChange}/> */}
                        <Button 
                            onClick={this.onSubmit} value-={this.state.employeeId} name='employeeId'
                            onClickCapture={} >
                                 Delete
                        </Button>
                    </ButtonToolbar>
                </div>
                {/* <input type='submit' name='Submit' value='submit'/> */}
               
            </form>
        </div>
    )
}
}



