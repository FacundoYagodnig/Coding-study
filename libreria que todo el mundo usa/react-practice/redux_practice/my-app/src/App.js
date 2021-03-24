import React from "react";
import Proyects from "./pages/Proyects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./pages/Skills";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./styles/index.css";
import "./components/Header/Header.css";
import "./styles/Proyects.css";
import "./components/Main/Main.css";
import "./components/MainProyects/MainProyects.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/proyects">
          <Proyects />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
