import React, { Component } from "react";
import range from "lodash.range";
import Stars from "./Stars";
import PlayerAnswerPool from "./PlayerAnswerPool";
import PlayerInterface from "./PlayerInterface";
import GameOverModal from "./GameOverModal";
import NumberPool from "./NumberPool";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";

const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;
const getInitialState = () => ({
  stars: range(0, getRandomNumber()),
  playerAnswer: [],
  usedNumbers: [],
  buttonState: "default",
  repaints: 5,
  isModalOpen: false,
  gameOverStatus: false
});

const possibleCombinationSum = (arr, n) => {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  let listSize = arr.length,
    combinationsCount = 1 << listSize;
  for (let i = 1; i < combinationsCount; i++) {
    let combinationSum = 0;
    for (let j = 0; j < listSize; j++) {
      if (i & (1 << j)) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

class App extends Component {
  state = getInitialState();

  restartGame = () => {
    this.setState(() => getInitialState());
  };

  updateGameStatus = () => {
    const possibleNumbers = range(1, 10).filter(
      number => this.state.usedNumbers.indexOf(number) !== -1
    );

    if (this.state.usedNumbers.length + this.state.playerAnswer.length === 9)
      return this.setState(pState => ({
        isModalOpen: true,
        buttonState: "default",
        playerAnswer: [],
        gameOverStatus: true,
        usedNumbers: this.state.usedNumbers.concat(this.state.playerAnswer)
      })); //game won
    //if no more possible combinations available end the game
    if (
      this.state.repaints === 0 &&
      !possibleCombinationSum(possibleNumbers, this.state.stars)
    )
      return this.setState(pState => ({
        isModalOpen: true,
        buttonState: "default",
        playerAnswer: [],
        gameOverStatus: false,
        usedNumbers: this.state.usedNumbers.concat(this.state.playerAnswer)
      }));
  };

  handleRound = () => {
    if (
      this.state.stars.length ===
      this.state.playerAnswer.reduce((x, y) => x + y, 0)
    ) {
      //check if game is over now that the submission is valid
      this.updateGameStatus();
      //accept submission if game is not over
      this.setState(
        pState => ({
          buttonState: "correct",
          playerAnswer: [],
          usedNumbers: this.state.usedNumbers.concat(this.state.playerAnswer)
        }),
        this.updateGameStatus
      );
    } else if (this.state.playerAnswer.length !== 0) {
      this.setState(pState => ({
        buttonState: "mistake"
      }));
    }
  };

  repaintRound = () => {
    if (this.state.repaints === 0) return;
    this.setState(
      pState => ({
        stars: range(0, getRandomNumber()),
        buttonState: "default",
        playerAnswer: [],
        repaints: pState.repaints - 1
      }),
      this.updateGameStatus
    );
  };

  advanceRound = () => {
    switch (this.state.buttonState) {
      case "correct":
        return this.setState(pState => ({
          stars: range(0, getRandomNumber()),
          buttonState: "default"
        }));
      default:
        return this.handleRound();
    }
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

  closeModal = () =>
    this.setState(pState => ({
      isModalOpen: false
    }));

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center text-danger">
            <div className="col-md-12 rounded align-middle">
              <h2 className="game-title game-title-small">play</h2>
              <h2 className="game-title">nine</h2>
            </div>
          </div>
          <div className="row text-center">
            <Stars stars={this.state.stars} />
            <PlayerInterface
              onClick={this.advanceRound}
              repaints={this.state.repaints}
              repaintRound={this.repaintRound}
              state={this.state.buttonState}
            />
            <PlayerAnswerPool
              playerAnswer={this.state.playerAnswer}
              onClick={this.unselectNumber}
            />
          </div>
          <div className="row text-center">
            <NumberPool
              numberPool={this.state.numberPool}
              usedNumbers={this.state.usedNumbers}
              onClick={this.selectNumber}
            />
          </div>
          <div className="row text-center text-danger footer">
            <div className="col-md-12 rounded align-middle">
              <h2 className="game-title game-title-small">
                thank you for playing
              </h2>
              <p className="small text-dark">
                © <a href="https://github.com/GozaRuu">GozaRuu</a>. 2018 All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
        {this.state.isModalOpen ? (
          <div>
            <GameOverModal
              closeModal={this.closeModal}
              restartGame={this.restartGame}
              status={this.state.gameOverStatus}
            />
          </div>
        ) : (
          <div />
        )}
      </React.Fragment>
    );
  }
}

export default App;
