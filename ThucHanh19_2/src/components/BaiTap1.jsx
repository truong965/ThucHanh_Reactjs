import React, { useState } from 'react';
import './BaiTap1.css';
export default function BaiTap1() {
      // tinh toan
      const [soA, setSoA] = useState(0)
      const [soB, setSoB] = useState(0)
      const [tong, setTong] = useState(0)
      const [phepTinh, setPhepTinh] = useState('+')
      const handleSoAChange = (e) => {
            setSoA(Number(e.target.value))
      }
      const handleSoBChange = (e) => {
            setSoB(Number(e.target.value))
      }
      const handlePhepTinhChange = (e) => {
            setPhepTinh(e.target.value)
      }
      const handleTinh = () => {
            switch (phepTinh) {
                  case '+':
                        setTong(soA + soB)
                        break
                  case '-':
                        setTong(soA - soB)
                        break
                  case '*':
                        setTong(soA * soB)
                        break
                  case '/':
                        setTong(soA / soB)
                        break
                  default:
                        break
            }
      }
      return (
            <div className='bai-tap-1-container'>
                  <h1>Calculate</h1>
                  <input type="number" value={soA} onChange={handleSoAChange} />
                  <select value={phepTinh} onChange={handlePhepTinhChange}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                  </select>
                  <input type="number" value={soB} onChange={handleSoBChange} />
                  <p>= {tong}</p>
                  <button onClick={handleTinh}>Tinh</button>

            </div>
      )
}