import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Order from './components/order/order';
import SummaryOrder from './components/order/summaryOrder';

function App() {
  return (
    <Router>
        <Route path="/order" render={() => (
            <Order />
        )} />

        <Route path="/summaryOrder" render={() => (
            <SummaryOrder />
        )} />

    </Router>
  );
}

export default App;