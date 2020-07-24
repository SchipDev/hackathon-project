import React, { Component } from "react";
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Contact />
      </div>
    )
  }
}

export default Home;
