import React, { Component } from 'react';
import { HashRouter,BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'; 
import './index.css';
import Portfolio from "./components/Portfolio"; 
import Contact from "./components/Contact"; 
import Linux from "./components/Linux";
import Cyber from "./components/Cyber"; 




class App extends Component {
   render() {
    return (
      <HashRouter> 
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Linux" component={Linux} />
          <Route path="/Cyber" component={Cyber} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
       
         
          
        </div>
      </Router>
      </HashRouter> 
    );
  }
}

export default App;