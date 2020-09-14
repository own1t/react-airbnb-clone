import React from "react";

// Views
import Home from "./views/Home";

// Components
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
