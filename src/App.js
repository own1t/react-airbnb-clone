import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home";
import SearchPage from "./views/SearchPage";

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
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
