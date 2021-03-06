import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/contact"
            render={props => <Contact {...props} />}
          />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/work" render={props => <Work {...props} />} />
          <Route exact path="/work" render={props => <Contact {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
