import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import logo from "../assets/image/logo.svg"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand>
                        <img alt="logo" src={logo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link ><span className='navbarTitle'>Show All Tyres</span> </Nav.Link>
                            <Nav.Link > <span className='navbarTitle'>Find a Dealer</span> </Nav.Link>
                            <Nav.Link ><span className='navbarTitle'>Guides & Videos</span> </Nav.Link>
                            <Nav.Link ><span className='navbarTitle'>Go with</span> </Nav.Link>
                            <Nav.Link ><span className='navbarTitle'>Service & Help</span> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}