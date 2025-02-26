import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableInvest from './components/TableInvest.jsx'
function App() {
  const [invest, setInvest] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [goal, setGoal] = useState(0)
  const [showTable, setShowTable] = useState(false)
  const handleInvest = (e) => {
    setInvest(parseFloat(e.target.value))
  }
  const handleRate = (e) => {
    setRate(parseFloat(e.target.value))
  }
  const handleYear = (e) => {
    let yearValue = Math.ceil(Math.log10(goal / invest) / Math.log10(1.0 + rate))
    setYear(yearValue)
    setShowTable(true)
  }
  const handleGoal = (e) => {
    setGoal(parseFloat(e.target.value))
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📈 Investment Calculator</h1>
      <div className="card shadow p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Investment Amount:</label>
            <input type="number" className="form-control" onChange={handleInvest} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Rate (% per year):</label>
            <input type="number" className="form-control" onChange={handleRate} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Goal:</label>
            <input type="number" className="form-control" onChange={handleGoal} />
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary px-4" onClick={handleYear}>
            Calculate
          </button>
        </div>
      </div>
      {showTable && <TableInvest invest={invest} rate={rate} goal={goal} year={year} />}
    </div>
  );
}
export default App
