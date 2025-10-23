// src/App.js
import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Results from "./components/Results";
import Glossary from "./components/Glossary";
import Tooltip from "./components/Tooltip";
import "./App.css";

function App() {
	  const [loanAmount, setLoanAmount] = useState("");
	    const [interestRate, setInterestRate] = useState("");
	      const [loanTerm, setLoanTerm] = useState("");
	        const [monthlyPayment, setMonthlyPayment] = useState(null);

	          const calculatePayment = (amount, rate, term) => {
	          	    const principal = parseFloat(amount);
	          	        const monthlyRate = parseFloat(rate) / 100 / 12;
	          	            const months = parseFloat(term) * 12;

	          	                if (monthlyRate === 0) {
	          	                	      return principal / months;
	          	                	          } else {
	          	                	          	      return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
	          	                	          	          }
	          	                	          	            };

	          	                	          	              const handleSubmit = (e) => {
	          	                	          	              	    e.preventDefault();
	          	                	          	              	        const payment = calculatePayment(loanAmount, interestRate, loanTerm);
	          	                	          	              	            setMonthlyPayment(payment.toFixed(2));
	          	                	          	              	              };

	          	                	          	              	                return (
	          	                	          	              	                	    <div className="App">
	          	                	          	              	                	          <h1>Mortgage Calculator</h1>
	          	                	          	              	                	                <CalculatorForm
	          	                	          	              	                	                        loanAmount={loanAmount}
	          	                	          	              	                	                                setLoanAmount={setLoanAmount}
	          	                	          	              	                	                                        interestRate={interestRate}
	          	                	          	              	                	                                                setInterestRate={setInterestRate}
	          	                	          	              	                	                                                        loanTerm={loanTerm}
	          	                	          	              	                	                                                                setLoanTerm={setLoanTerm}
	          	                	          	              	                	                                                                        handleSubmit={handleSubmit}
	          	                	          	              	                	                                                                              />
	          	                	          	              	                	                                                                                    <Results monthlyPayment={monthlyPayment} />
	          	                	          	              	                	                                                                                          <Glossary />
	          	                	          	              	                	                                                                                                <Tooltip />
	          	                	          	              	                	                                                                                                    </div>
	          	                	          	              	                	                                                                                                      );
	          	                	          	              	                	                                                                                                      }

	          	                	          	              	                	                                                                                                      export default App;																																							
