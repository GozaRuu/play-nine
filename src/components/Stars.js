import React from "react";

const Stars = ({ stars }) => (
  <div>{stars.map(number => <span key={number}>*</span>)}</div>
);

export default Stars;
