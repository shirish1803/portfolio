import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import '../App.css';
import { NavLink } from 'react-router-dom';

class Navb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            
        };
        this.toggleNav = this.toggleNav.bind(this);
               
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand="md" className="Navbar">
                    <div className="container">
                    <NavbarToggler  onClick={this.toggleNav}>+</NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <NavLink className="nav-link" to="/intro"><span className="link"><i class="fas fa-chevron-left" style={{color: "orange"}}></i>  <span style={{fontSize: "20px"}}>Shirish <span style={{color: "yellow"}}>/</span></span><i class="fas fa-chevron-right" style={{color: "orange"}}></i></span></NavLink>                                
                            <Nav navbar className="ml-auto " style={{ cursor: "pointer" }}>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="link">About Me&nbsp;&nbsp;&nbsp;&nbsp; </span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects" ><span className="link"> Projects&nbsp;&nbsp;&nbsp;&nbsp; </span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tech"><span className="link"> Technical Skills&nbsp;&nbsp;&nbsp; </span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resume"><span className="link"> Resume </span></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}
export default Navb;