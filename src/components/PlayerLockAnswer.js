import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const PlayerLockAnswer = ({ onClick }) => (
  <button className="btn player-btn" onClick={onClick}>
    <FontAwesomeIcon icon={faBicycle} />
  </button>
);

export default PlayerLockAnswer;
