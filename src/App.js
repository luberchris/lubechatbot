import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
