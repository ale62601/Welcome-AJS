import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../welcome/Welcome";
import Program from "./Program";
import Hobbie from "./Hobbie";
import Contact from "./Contact";


const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/Program" component={Program} />
      <Route exact path="/Hobbie" component={Hobbie}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route exact path="/Contact" component={Contact}/>

    </Switch>
  </Router>
);
export default Root;
