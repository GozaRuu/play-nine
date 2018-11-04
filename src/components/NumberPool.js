import React from "react";
import range from "lodash.range";

const NumberPool = ({ numberPool, onClick, usedNumbers }) => (
  <div className="col-md-12 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
    <div className="col-md-12 shadow-lg rounded d-flex p-2 align-items-center justify-content-center">
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
    </div>
  </div>
);

export default NumberPool;
