import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Order from './components/order/order';

function App() {
  return (
    <Router>
        <Route path="/order" render={() => (
            <Order />
        )} />
    </Router>
  );
}

export default App;