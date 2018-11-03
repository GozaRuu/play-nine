import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ stars }) => (
  <div className="col-md-4 shadow-lg rounded  p-2 d-flex align-items-center justify-content-center">
    <div>
      {stars.map(number => (
        <span key={number}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  </div>
);

export default Stars;
