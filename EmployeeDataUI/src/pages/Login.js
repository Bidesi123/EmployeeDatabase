import React ,{Component} from "react";
import './Login.css'
import axios from 'axios';
import { login } from "./controler/service";

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userid:"",
            password:"",
            emailTest: RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/),
            error: false,
            idErrText: "",
            passwordErrText: "",
        }
    }
    handleEmail=(event)=>{
        // const email=event.target.value;
        // this.setState({
        //     email:email
        // })
        // console.log("email",this.state.email)
        if ((event.target.value)>0) {
            this.setState({
                idErrText: "",
                error: true,
                userid: event.target.value
            });
        } else {
            this.setState({
                idErrText: "*invalid Id",
                error: false,
                userid: event.target.value
            });
        }
    }
    handlePassword=(event)=>{
        // const password=event.target.value;
        // this.setState({
        //     password:password
        // })
        // console.log("email",this.state.password)


        if (this.state.emailTest.test(event.target.value)) {
            this.setState({
                passwordErrText: "",
                error: true,
                password: event.target.value
            });
        } else {
            this.setState({
                passwordErrText: "*invalid password",
                error: false,
                password: event.target.value
            });
        }
    }
    handleSubmit=(event)=>{
        // var data={
        //     email:this.state.email,
        //     password:this.state.password
        // }
        // console.log("data",data)

        if(this.state.error){
            event.preventDefault();
            console.log("valid user");
            let data={
                userid:this.state.userid,
                password:this.state.password
            };
            console.log(data);
            //login(data)
            axios.GET(`https://localhost:44334/api/Employee/LoginEmployee`, data)
            .then(response=>{
                if (response.status === 200){
                    console.log("ready to home page");
                    this.props.history.push({
                        pathname: "/Home"
                    });
                }
                else{
                    console.log(response);
                }
            });
        }
        else{
            console.log("invalid userid or password");
            alert("invalid userid or password");
        }
    }
    render(){
        return(
            <div className="main-head">
                <div className="login-head">Login</div>
                <div className="email-head">
                   <input type="number" className="input-email" placeholder="EmployeeId" onChange={this.handleEmail}/>
                </div>
                <div className="password-head">
                    <input type="password" className="input-password" placeholder="Password" onChange={this.handlePassword}/>
                </div>
                <button type="submit" className="login" value="Login" onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}
