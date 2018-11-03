import React from "react";

const PlayerAnswer = ({ playerAnswer, onClick }) => (
  <div className="col-md-4 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
    {playerAnswer.map(number => (
      <span key={number} onClick={() => onClick(number)}>
        {number}
      </span>
    ))}
  </div>
);

export default PlayerAnswer;
