import React, { Component } from "react";
import "./about.css";
class About extends Component {
  state = {
    showCards: false,
    showButton: true
  };
  cards = () => {
    this.setState({
      showCards: !this.state.showCards,
      showButton: false
    });
  };
  render() {
    return (
      <div className="allAbout">
        <div className="me">
          <div className="header">
            <h1>Toby Flenderson</h1>
            <p>
              "We should really have the office's air quality tested. We have
              radon coming from below. We have asbestos in the ceilings. These
              are silent killers"
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/1/18/Toby_Flenderson_promo_picture.jpg"
            alt="tobby"
            width="300vw"
            height="400vh"
          />
        </div>
        {this.state.showButton ? (
          <button onClick={this.cards}>Facts about me</button>
        ) : (
          ""
        )}
        {this.state.showCards ? (
          <div className="cardsAll">
            <p className="card">Human Resources</p>
            <p className="card">Down to earth</p>
            <p className="card">Has divorced</p>
            <p className="card">Has a daughter</p>
            <p className="card">Gets hated for no reason</p>
            <p className="card">Tries to help Michael all the time</p>
            <p className="card">Takes his job seriously</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default About;
