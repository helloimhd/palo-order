import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/home';
import Order from './components/order/order';
import SummaryOrder from './components/order/summaryOrder';
import GalleryForm from './components/gallery/galleryForm';

function App() {
  return (
    <Router>
        <Route path="/" exact render={() => (
            <Home />
        )} />

        <Route path="/order" render={() => (
            <Order />
        )} />

        <Route path="/summaryOrder" render={() => (
            <SummaryOrder />
        )} />

        <Route path="/gallery" render={() => (
            <GalleryForm />
        )} />

    </Router>
  );
}

export default App;