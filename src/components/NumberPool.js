import React from "react";

const NumberPool = ({ numberPool, onClick }) => (
  <div>
    {numberPool.map(number => (
      <span key={number} onClick={() => onClick(number)}>
        {number}
      </span>
    ))}
  </div>
);

export default NumberPool;
