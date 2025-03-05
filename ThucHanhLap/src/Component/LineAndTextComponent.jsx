import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './LineAndTextComponent.css';
const LineAndTextComponent = (props) => {
      return (
            <div className="d-flex justify-content-center align-items-center w-100">
                  <div className="d-flex align-items-center w-100">
                        <hr className="cusHr" />
                        <span className="mx-1">{props.content}</span>
                        <hr className="cusHr" />
                  </div>
            </div>

      );
}
export default LineAndTextComponent;