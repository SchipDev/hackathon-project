import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
// import Home from './components/Home'
// import About from './components/About'
// import Work from './components/Work'
// import Contact from './components/Contact'
class App extends Component {
  render() {
    return (
      <div>
        {/* <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/work" render={props => <Work {...props} />} />
          <Route exact path="/work" render={props => <Contact {...props} />} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
