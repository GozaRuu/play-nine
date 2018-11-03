import React from "react";

const PlayerAnswer = ({ playerAnswer, onClick }) => (
  <div>
    {playerAnswer.map(number => (
      <span key={number} onClick={() => onClick(number)}>
        {number}
      </span>
    ))}
  </div>
);

export default PlayerAnswer;
