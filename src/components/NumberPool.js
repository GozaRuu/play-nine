import React from "react";

const NumberPool = ({ numberPool }) => (
  <div>
    {numberPool.map(number => (
      <span key={number} className="shadow">
        {number}
      </span>
    ))}
  </div>
);

export default NumberPool;
