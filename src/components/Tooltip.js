import React from "react";
import "./Tooltip.css"; // Create a CSS file for styling

const Tooltip = ({ message, position }) => {
  return (
    <div className="tooltip" style={{ left: position.x, top: position.y }}>
      {message}
    </div>
  );
};

export default Tooltip;
