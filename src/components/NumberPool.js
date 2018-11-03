import React from "react";

const NumberPool = ({ numberPool }) => (
  <div>{numberPool.map(number => <span key={number}>{number}</span>)}</div>
);

export default NumberPool;
