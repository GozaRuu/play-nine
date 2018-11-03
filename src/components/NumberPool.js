import React from "react";
import range from "lodash.range";

const NumberPool = ({ numberPool, onClick, usedNumbers }) => (
  <div>
    {range(1, 10).map(number => {
      if (usedNumbers.indexOf(number) !== -1) {
        return (
          <span key={number} className="selected">
            {number}
          </span>
        );
      } else {
        return (
          <span key={number} onClick={() => onClick(number)}>
            {number}
          </span>
        );
      }
    })}
  </div>
);

export default NumberPool;
