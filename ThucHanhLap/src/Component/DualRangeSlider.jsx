import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DualRangeSlider.css";

const DualRangeSlider = (props) => {
  const [minValue, setMinValue] = useState(props.minValue || 0);
  const [maxValue, setMaxValue] = useState(props.maxValue || 100);
  const minLimit = props.minLimit || 0;
  const maxLimit = props.maxLimit || 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold">{minValue} minutes</span>
        <span className="fw-bold">{maxValue} minutes</span>
      </div>

      {/* Thanh trượt với 2 nút điều chỉnh */}
      <div className="range-slider position-relative">
        {/* Thanh hiển thị khoảng giữa */}
        <div
          className="position-absolute range-track"
          style={{
            left: `${(minValue / maxLimit) * 100}%`,
            right: `${100 - (maxValue / maxLimit) * 100}%`,
          }}
        ></div>

        {/* Min Range Input */}
        <input
          type="range"
          className="form-range range-input"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          style={{ left: 0 }} // Nằm ở đầu bên trái
        />

        {/* Max Range Input */}
        <input
          type="range"
          className="form-range range-input"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          style={{ right: 0 }} // Nằm ở đầu bên phải
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
