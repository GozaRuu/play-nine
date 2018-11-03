import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faLaughBeam,
  faAngry
} from "@fortawesome/free-solid-svg-icons";

const ButtonState = state => {
  switch (state) {
    case "correct":
      return <FontAwesomeIcon icon={faLaughBeam} size="lg" />;
    case "mistake":
      return <FontAwesomeIcon icon={faAngry} size="lg" />;
    default:
      return <FontAwesomeIcon icon={faBicycle} size="lg" />;
  }
};

const PlayerLockAnswer = ({ onClick, state }) => {
  return (
    <div className="col-md-4 my-4 d-flex p-2 align-items-center justify-content-center">
      <button className="btn player-btn" onClick={onClick}>
        {ButtonState(state)}
      </button>
    </div>
  );
};

export default PlayerLockAnswer;
