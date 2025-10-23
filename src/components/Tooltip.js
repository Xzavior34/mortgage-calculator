import React, { useState } from "react";

function Tooltip({ term, text }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <strong>{term}</strong>
      {show && <span className="tooltip-text">{text}</span>}
    </div>
  );
}

export default Tooltip;