import React, { useState, useEffect } from 'react';

const CalculatorForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState(localStorage.getItem('loanAmount') || '');
  const [interestRate, setInterestRate] = useState(localStorage.getItem('interestRate') || '');
  const [loanTerm, setLoanTerm] = useState(localStorage.getItem('loanTerm') || '');

  // 💾 Auto-save to localStorage when values change
  useEffect(() => {
    localStorage.setItem('loanAmount', loanAmount);
    localStorage.setItem('interestRate', interestRate);
    localStorage.setItem('loanTerm', loanTerm);
  }, [loanAmount, interestRate, loanTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loanAmount || !interestRate || !loanTerm) {
      alert("Please fill in all fields");
      return;
    }
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -payments));
    const totalPayment = monthlyPayment * payments;
    const totalInterest = totalPayment - principal;

    onCalculate({ monthlyPayment, totalPayment, totalInterest });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Loan Amount ($):</label>
      <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />

      <label>Interest Rate (%):</label>
      <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />

      <label>Loan Term (years):</label>
      <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />

      <button type="submit">Calculate</button>
    </form>
  );
};

export default CalculatorForm;