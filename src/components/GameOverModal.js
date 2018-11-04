import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faBomb,
  faGlobeAfrica
} from "@fortawesome/free-solid-svg-icons";

const GameOverModal = ({ state }) => (
  <div className="game-over-modal-content shadow">
    <span class="game-over-modal-close">&times;</span>
    <h2 className="game-over-modal-title-level1">game</h2>
    <h2 className="game-over-modal-title-level2">over</h2>
    <hr />
    <button className="btn player-btn font-weight-bold">
      <FontAwesomeIcon icon={faMotorcycle} size="3x" />
    </button>
  </div>
);

export default GameOverModal;
