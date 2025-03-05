import React from 'react';
import { mainColor } from '../FEData/colorData';
import './Filter.css';
import DualRangeSlider from './DualRangeSlider';
const Filter = (props) => {
      const [isTypeDropdown, setIsTypeDropdown] = React.useState(false);
      const [isTimeDropdown, setIsTimeDropdown] = React.useState(false);
      const [isRateDropdown, setIsRateDropdown] = React.useState(false);
      const typeDate = [
            {
                  id: 1,
                  name: 'Pan-fried'
            },
            {
                  id: 2,
                  name: 'Stir-fried'
            },
            {
                  id: 3,
                  name: 'Grilled'
            },
            {
                  id: 4,
                  name: 'Roasted'
            },
            {
                  id: 5,
                  name: 'Sauteed'
            },
            {
                  id: 6,
                  name: 'Baked'
            },
            {
                  id: 7,
                  name: 'Steamed'
            },
            {
                  id: 8,
                  name: 'Stewed'
            }

      ]
      const ratingData = [1, 2, 3, 4, 5]
      return (
            <div className='d-flex flex-column  border border-1 rounded-4 shadow-sm p-4 w-100 bg-white'>
                  <div className='d-flex justify-content-start align-items-center w-100'>
                        <i className="fa-solid fa-bars fs-3 me-4" />
                        <h3>FILTERS</h3>
                  </div>
                  <div className="type">
                        <div className="d-flex justify-content-between align-items-center py-3" onClick={() => setIsTypeDropdown(!isTypeDropdown)} data-bs-toggle="collapse" data-bs-target="#collapseType" aria-expanded="false" aria-controls="collapseType" >
                              <h5 className='me-4'>Type</h5>
                              {isTypeDropdown ? <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-up fs-3" /> : <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-down fs-3" />}
                        </div>
                        <div className="collapse" id="collapseType">
                              <div className='row'>
                                    {typeDate.map((item, index) => {
                                          return (
                                                <div key={index} className="col-6 d-flex justify-content-between align-items-center my-2">
                                                      <p className='m-0'>{item.name}</p>
                                                      <input className='border-3 form-check-input' type="checkbox" />
                                                </div>
                                          )
                                    })}
                              </div>
                        </div>
                  </div>
                  <div className='Time'>
                        <div className="d-flex justify-content-between align-items-center py-3" onClick={() => setIsTimeDropdown(!isTimeDropdown)} data-bs-toggle="collapse" data-bs-target="#collapsTime" aria-expanded="false" aria-controls="collapsTime" >
                              <h5 className='me-4'>Time</h5>
                              {isTimeDropdown ? <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-up fs-3" /> : <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-down fs-3" />}
                        </div>
                        <div className="collapse" id="collapsTime">
                              <DualRangeSlider />
                        </div>
                  </div>
                  <div className='Rating'>
                        <div className="d-flex justify-content-between align-items-center py-3" onClick={() => setIsRateDropdown(!isRateDropdown)} data-bs-toggle="collapse" data-bs-target="#collapsRate" aria-expanded="false" aria-controls="collapsRate" >
                              <h5 className='me-4'>Rating</h5>
                              {isRateDropdown ? <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-up fs-3" /> : <i style={{ color: `${mainColor}` }} className="fa-solid fa-caret-down fs-3" />}
                        </div>
                        <div className="collapse" id="collapsRate">
                              <div className="container mt-4">
                                    {ratingData.map((starCount, index) => (
                                          <div key={index} className="d-flex align-items-center mb-2">
                                                {/* Checkbox */}
                                                <input type="checkbox" className="border-3 form-check-input me-2" />

                                                {/* Hiển thị 5 ngôi sao */}
                                                {[...Array(5)].map((_, starIndex) => (
                                                      <i
                                                            key={starIndex}
                                                            className={`fs-3 mx-2 fa-solid fa-star ${starIndex < starCount ? "text-warning" : "text-secondary"}`}
                                                      ></i>
                                                ))}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}
export default Filter;