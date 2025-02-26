import React, { useState } from 'react';
function CusButton(props) {
      const [color, setColor] = useState('red');

      const handleChangeColor = () => {
            setColor(color === 'red' ? 'blue' : 'red');
      }
      return (
            // <button >
            // <button style={{ backgroundColor: color, color: props.color, fontSize: props.fontSize }} onClick={handleChangeColor}>{props.children}</button>
      )
}
export default CusButton;