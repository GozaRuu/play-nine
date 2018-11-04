import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

const GameOverModal = ({ state }) => (
  <div className="game-over-modal-content shadow">
    <span class="game-over-modal-close">&times;</span>
    <h2 className="game-over-modal-title text-secondary">game Over</h2>
    <hr />
    <button className="btn player-btn font-weight-bold">
      <FontAwesomeIcon icon={faGlobeAfrica} size="lg" /> Let's Go Again
    </button>
  </div>
);

export default GameOverModal;
