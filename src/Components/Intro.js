import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Intro extends Component{
    render(){
        return(
            <div>
                <div className="developer">I'm a Front-end Developer</div>
                <div className="animation">
                    <div className="developer">I'm a Front-end Developer</div>
                    <div className="welcome" onClick={{href:"home"}}>Welcome To My Portfolio&nbsp;&nbsp;
                        <Button className="btn" href="home" outline style={{border: "1px solid black", color: "black"}}>lets go > </Button>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}
export default Intro