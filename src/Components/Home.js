import React, { Component } from 'react';
import '../App.css';
import { Card } from 'reactstrap';
import Navb from './Navbar';
import Projects from './Projects';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNaOpen: false,
            
        };
        this.toggleNa = this.toggleNa.bind(this);
               
    }
    toggleNa() {
        this.setState({
            isNaOpen: !this.state.isNaOpen
        });
    }
    render(){
        return(
            <div className="backG">
                
                <Navb />
                
                <div className="row container">
                    <div className="col-12 col-md-6">
                        <div className="name">
                            Shirish<br />Bajpai
                        </div>
                        <div className="frontend">
                            Front-End Developer
                        </div>
                        <div style={{marginLeft: "20%"}}>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-github fa-3x icon"  ></span></a>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-linkedin fa-3x icon"></span></a>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-instagram fa-3x icon"></span></a>
                        </div>
                    </div>
                    <div className="col-12 offset-1 col-md-5">
                        
                        <img className="pic" src={require('../assests/pic.jpg')} alt="full pic" /> 
                        
                        <p className="about">I’m a hard working and dedicated front-end developer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on.</p>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
} 
export default Home;