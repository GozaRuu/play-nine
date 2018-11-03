import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ stars }) => (
  <div>
    {stars.map(number => (
      <span key={number}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    ))}
  </div>
);

export default Stars;
