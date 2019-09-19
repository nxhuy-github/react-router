import React from 'react';
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import ItemDetail from './components/ItemDetail'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>  
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          {/** ItemDetail will a have prop called "match" */}
          <Route path="/shop/:id" component={ItemDetail} /> 
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App;
