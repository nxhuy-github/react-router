import React from 'react';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>  
      <div>
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;
