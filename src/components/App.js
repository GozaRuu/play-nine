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
    numberPool: range(1, 10),
    playerAnswer: []
  };

  selectNumber = number => {
    if (this.state.playerAnswer.indexOf(number) !== -1) return;
    this.setState(pState => ({
      playerAnswer: pState.playerAnswer.concat(number)
    }));
  };

  unselectNumber = number =>
    this.setState(pState => ({
      playerAnswer: pState.playerAnswer.filter(
        selected => (selected === number ? null : selected)
      )
    }));

  veryfiyAnswer = () =>
    this.state.stars.length ===
    this.state.playerAnswer.reduce((x, y) => x + y, 0);

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
            <PlayerLockAnswer onClick={this.veryfiyAnswer} />
          </div>
          <div className="col-md-4 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
            <PlayerAnswer
              playerAnswer={this.state.playerAnswer}
              onClick={this.unselectNumber}
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
            <NumberPool
              numberPool={this.state.numberPool}
              onClick={this.selectNumber}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
