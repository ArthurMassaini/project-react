import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cart/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
