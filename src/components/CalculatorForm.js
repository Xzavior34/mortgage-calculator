import React, { useEffect } from "react";

const CalculatorForm = ({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  handleSubmit, // ✅ matches App.js
}) => {
  // 💾 Auto-save to localStorage when values change
  useEffect(() => {
    localStorage.setItem("loanAmount", loanAmount);
    localStorage.setItem("interestRate", interestRate);
    localStorage.setItem("loanTerm", loanTerm);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <form onSubmit={handleSubmit} className="calculator-form">
      <label>Loan Amount ($):</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        required
      />

      <label>Interest Rate (%):</label>
      <input
        type="number"
        step="0.01"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        required
      />

      <label>Loan Term (years):</label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
        required
      />

      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;