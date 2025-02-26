import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableInvest = (props) => {
  const data = []
  let currentInvest = props.invest;
  for (let i = 1; i <= props.year; i++) {
    let previoustInvest = currentInvest;
    let profit = previoustInvest * props.rate;
    console.log(profit)
    currentInvest = previoustInvest + profit;
    console.log(currentInvest)
    data.push({
      invest: previoustInvest,
      rate: props.rate,
      year: i,
      goal: currentInvest
    })
  }
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Investment Growth Table</h2>
      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Investment</th>
            <th>Rate</th>
            <th>Year</th>
            <th>Goal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>${row.invest.toFixed(2)}</td>
              <td>{(row.rate * 100).toFixed(2)}%</td>
              <td>{row.year}</td>
              <td>${row.goal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableInvest;
