import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Switch, Route, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Projects from './Components/Projects';
import Navb from './Components/Navbar';
import Resume from './Components/Resume';
import Intro from './Components/Intro';
import Tech from './Components/Technical';



function App() {
  return (
    <>     
     
      <BrowserRouter>     
        
        <Switch>
          <Route path="/tech" component={Tech} />
          <Route path="/intro" component={Intro} />
          <Route path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Redirect to="/Intro" />
        </Switch>        
      </BrowserRouter>        
    </>
  );
}
export default App;
