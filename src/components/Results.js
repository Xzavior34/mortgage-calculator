import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Results = ({ results }) => {
  if (!results) return null;

  const data = [
    { name: 'Principal', value: results.totalPayment - results.totalInterest },
    { name: 'Interest', value: results.totalInterest },
  ];

  const COLORS = ['#0066ff', '#ff9900'];

  return (
    <div className="results">
      <h2>Results</h2>
      <p><strong>Monthly Payment:</strong> ${results.monthlyPayment.toFixed(2)}</p>
      <p><strong>Total Payment:</strong> ${results.totalPayment.toFixed(2)}</p>
      <p><strong>Total Interest:</strong> ${results.totalInterest.toFixed(2)}</p>

      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Results;