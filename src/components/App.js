import React, { Component } from "react";
import range from "lodash.range";
import Stars from "./Stars";
import PlayerAnswer from "./PlayerAnswer";
import PlayerLockAnswer from "./PlayerLockAnswer";
import NumberPool from "./NumberPool";

class App extends Component {
  state = {
    stars: range(0, 4),
    numberPool: range(0, 10),
    playerAnswer: [1, 2, 5]
  };
  render() {
    return (
      <React.Fragment>
        <Stars stars={this.state.stars} />
        <PlayerLockAnswer />
        <PlayerAnswer playerAnswer={this.state.playerAnswer} />
        <NumberPool numberPool={this.state.numberPool} />
      </React.Fragment>
    );
  }
}

export default App;
