import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import Navb from './Navbar';

class Projects extends Component {
    render() {
        return (
            <div className="backG">
                
                <Navb />
            
            <div className="container">
                <div className="heading">
                    Projects
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <a href="https://happy-boyd-78d477.netlify.app/" className="btn cardb" role="button">
                            <Card style={{border: "1px solid black"}}>
                                <CardBody>
                                    <CardImg src={require('../assests/beerista.png')} alt="clock" />
                                    <CardText>
                                        beerista
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <a href="https://elated-curie-a9fa10.netlify.app/" className="btn cardb" role="button">
                            <Card style={{border: "1px solid black"}}>
                                <CardBody>
                                    <CardImg src={require('../assests/clock.png')} alt="clock" />
                                    <CardText>
                                        Clock
                                </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                    <div className="col-12 col-md-4">
                        <a href="http://checkurmaths.host20.uk/" className="btn cardb" role="button">
                            <Card style={{border: "1px solid black"}}>
                                <CardBody>
                                    <CardImg src={require('../assests/checkUrMaths.png')} alt="check your maths" />
                                    <CardText className="CardText">
                                        Maths Game
                                </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                    

                </div>
            </div>
            </div>
        )
    }
}
export default Projects;