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
    playerAnswer: [],
    usedNumbers: [],
    buttonState: ""
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

  advanceRound = () => {
    if (this.state.buttonState === "correct") {
      this.setState(pState => ({
        stars: range(0, getRandomNumber()),
        buttonState: ""
      }));
      return;
    }
    if (this.state.playerAnswer.length === 0) return;
    if (
      this.state.stars.length ===
      this.state.playerAnswer.reduce((x, y) => x + y, 0)
    ) {
      this.setState(pState => ({
        buttonState: "correct",
        playerAnswer: [],
        usedNumbers: this.state.usedNumbers.concat(this.state.playerAnswer)
      }));
    } else {
      this.setState(pState => ({
        buttonState: "mistake"
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center text-danger">
          <div className="col-md-12 rounded align-middle">
            <h2 className="game-title game-title-small">play</h2>
            <h2 className="game-title">nine</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 shadow-lg rounded  p-2 d-flex align-items-center justify-content-center">
            <Stars stars={this.state.stars} />
          </div>
          <div className="col-md-4 my-4 d-flex p-2 align-items-center justify-content-center">
            <PlayerLockAnswer
              onClick={this.advanceRound}
              state={this.state.buttonState}
            />
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
              usedNumbers={this.state.usedNumbers}
              onClick={this.selectNumber}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
