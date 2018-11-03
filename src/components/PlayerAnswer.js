import React from "react";

const PlayerAnswer = ({ playerAnswer }) => (
  <div>
    {playerAnswer.map(number => (
      <span key={number}>{number}</span>
    ))}
  </div>
);

export default PlayerAnswer;
