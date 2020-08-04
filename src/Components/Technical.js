import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Navb from './Navbar';

class Tech extends Component{
    render(){
        return(
            <div className="backG">
                <Navb />
                <div className="container">
                <div className="heading ">
                Technical Skills
                </div>
                <div className="row ">
                    <div className="col-12 offset-1 col-md-5">
                    <img className="small" src={require('../assests/hicl.png')} alt="full pic" />
                    </div>
                    <div className="col-12 offset-1 col-md-5">                
                    <span className="fab fa-html5 skill" style={{fontSize: "100px"}}></span>
                    <span className="fab fa-css3 skill" style={{fontSize: "100px"}}></span>
                    <span className="fab fa-bootstrap skill" style={{fontSize: "100px"}}></span>
                    <span className="fab fa-js-square skill" style={{fontSize: "100px"}}></span>
                    <span className="fab fa-react skill" style={{fontSize: "100px"}}></span>
                    <span className="fab fa-adobe skill" style={{fontSize: "100px"}}></span>
                    </div>
                </div> 
                </div>
                            
                </div>            
        )
    }
}
export default Tech;