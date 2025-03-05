import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JS của Bootstrap (bao gồm cả Popper.js nếu cần)
const CusButton = (props) => {
      const customStyle = {
            backgroundColor: props.backgroundColor,
            color: props.textColor,
      };
      return (
            <button className={`${props.clsName}`} style={customStyle} onClick={props.onClick} >{props.children}</button>
      )
}
export default CusButton;