import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const GameOverModal = ({ closeModal, restartGame }) => (
  <div className="game-over-modal">
    <div className="game-over-modal-content shadow">
      <span className="game-over-modal-close" onClick={closeModal}>
        &times;
      </span>
      <h2 className="game-over-modal-title-level1">game</h2>
      <h2 className="game-over-modal-title-level2">over</h2>
      <hr />
      <button className="btn player-btn font-weight-bold" onClick={restartGame}>
        <FontAwesomeIcon icon={faMotorcycle} size="3x" />
      </button>
    </div>
  </div>
);

export default GameOverModal;
