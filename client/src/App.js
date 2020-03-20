import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./pages//Home/Home";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import Fourzerofour from "./pages/Fourzerofour/Fourzerofour";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/leaderboards" component={Leaderboards}/>
          <Route component={Fourzerofour}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
