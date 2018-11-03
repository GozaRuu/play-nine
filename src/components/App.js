import React, { Component } from "react";
import range from "lodash.range";
import Stars from "./Stars";
import PlayerAnswer from "./PlayerAnswer";
import PlayerLockAnswer from "./PlayerLockAnswer";
import NumberPool from "./NumberPool";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";

const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

class App extends Component {
  state = {
    stars: range(0, getRandomNumber()),
    numberPool: range(0, 10),
    playerAnswer: []
  };
  render() {
    return (
      <div className="container">
        <div className="row text-left text-danger text-uppercase">
          <div className="col-md-12 rounded align-middle">
            <h2>Play Nine</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 shadow-lg rounded  p-2 d-flex align-items-center justify-content-center">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-4 my-4 p-2 ">
            <PlayerLockAnswer />
          </div>
          <div className="col-md-4 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
            <PlayerAnswer playerAnswer={this.state.playerAnswer} />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
            <NumberPool numberPool={this.state.numberPool} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
