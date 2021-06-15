import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Data from "./Data";
import Home from "./Home";

class Routes extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/data" component={Data} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
