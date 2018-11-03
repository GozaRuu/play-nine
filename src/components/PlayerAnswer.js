import React from "react";

const PlayerAnswer = ({ playerAnswer }) => (
  <div>
    {playerAnswer.map(number => (
      <span key={number} className="shadow">
        {number}
      </span>
    ))}
  </div>
);

export default PlayerAnswer;
