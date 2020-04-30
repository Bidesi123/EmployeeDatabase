import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <nav>
                    <Link className="d-online p-2 bg=dark text=white"
                    to="/Login">Login</Link>
                    <Link className="d-online p-2 bg=dark text=white"
                    to="/Register">Register</Link>
                    <Link className="d-online p-2 bg=dark text=white"
                    to="/">Home</Link>
                </nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}