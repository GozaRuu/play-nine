import React from "react";
import range from "lodash.range";

const NumberPool = ({ numberPool, onClick }) => (
  <div>
    {range(1, 10).map(number => (
      <span key={number} onClick={() => onClick(number)}>
        {number}
      </span>
    ))}
  </div>
);

export default NumberPool;
