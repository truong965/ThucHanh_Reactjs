import React from 'react';
import CusButton from './CusButton';
const NoResults = (props) => {
      return (
            <div className='d-flex flex-column justify-content-center align-items-center'>
                  <h2 className='fw-3'>Sorry, no results were found for  "{props.query}"</h2>
                  <img src="../src/FEData/imgRightContent.png" alt="" />
                  <p>We have all your independence Day sweets covered.</p>
                  <ul className="list-group list-group-horizontal">
                        <li className="border-0 list-group-item"><CusButton clsName="btn px-2 " backgroundColor="#fef0f5" textColor="#f44b87" >Sweet Cake</CusButton></li>
                        <li className="border-0 list-group-item"><CusButton clsName="btn px-2 " backgroundColor="#f5f0fe" textColor="#905ff5" >Black Cake</CusButton></li>
                        <li className="border-0 list-group-item"><CusButton clsName="btn px-2 " backgroundColor="#fef0f5" textColor="#f44b87" >Pozole Verde</CusButton></li>
                        <li className="border-0 list-group-item"><CusButton clsName="btn px-2 " backgroundColor="#eefcff" textColor="#388da2" >Healthy food</CusButton></li>
                  </ul>
            </div>
      );
}
export default NoResults;