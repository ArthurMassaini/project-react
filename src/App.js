import React from 'react';
import { Switch. Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default App;
