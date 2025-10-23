import React from "react";
import Tooltip from "./Tooltip";

function Glossary() {
  return (
    <div className="glossary">
      <h3>📘 Mortgage Terms</h3>
      <ul>
        <li><Tooltip term="Principal" text="The total amount of money borrowed." /></li>
        <li><Tooltip term="Interest Rate" text="The percentage charged on the loan annually." /></li>
        <li><Tooltip term="Term" text="The length of time to repay the loan." /></li>
      </ul>
    </div>
  );
}

export default Glossary;