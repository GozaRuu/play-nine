import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const ModalContent = ({ status }) => {
  return !status ? (
    <React.Fragment>
      <h2 className="game-over-modal-title-level1">game</h2>
      <h2 className="game-over-modal-title-level2">over</h2>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h2 className="game-over-modal-title-level1">great game</h2>
      <h2 className="game-over-modal-title-level2">super</h2>
    </React.Fragment>
  );
};

const GameOverModal = ({ closeModal, restartGame, status }) => (
  <div className="game-over-modal">
    <div className="game-over-modal-content shadow">
      <span className="game-over-modal-close" onClick={closeModal}>
        &times;
      </span>
      <ModalContent status={status} />
      <hr />
      <button className="btn player-btn font-weight-bold" onClick={restartGame}>
        <FontAwesomeIcon icon={faMotorcycle} size="3x" />
      </button>
    </div>
  </div>
);

export default GameOverModal;
