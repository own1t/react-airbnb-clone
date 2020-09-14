import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Home />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
