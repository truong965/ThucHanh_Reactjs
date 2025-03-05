import { useEffect, useState } from 'react';
import { mainColor } from "../FEData/colorData";
const InputField = (props) => {
      const [isFocused, setIsFocused] = useState(false);
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);
      const [isPassword, setIsPassword] = useState(false);
      const handleFocus = () => {
            setIsFocused(true);
      }
      const handleBlur = () => {
            setIsFocused(false);
      }
      const containerStyle = {
            backgroundColor: "#f3f4f6",
            borderRadius: "10px",
            width: "100%",
            margin: "20px 0",
            padding: "3px",
            border: isFocused ? `2px solid ${mainColor}` : "2px solid transparent",
            boxShadow: isFocused ? `0 0 8px ${mainColor}50` : "none",
            transition: "all 0.3s ease",
      };
      useEffect(() => {
            if (props.type == "password") {
                  setIsPassword(true);
            }
      }, []);
      return (
            <div style={containerStyle} className={props.containerClassName}>
                  <div className="d-flex justify-content-between w-100">
                        <label className="mx-2 fw-bolder text-start">{props.label}</label>
                        {isPassword ? <span className="mx-2"
                              onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                              {isPasswordVisible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </span> : null}
                  </div>
                  <input
                        type={isPassword ? (isPasswordVisible ? "text" : "password") : props.type}
                        className="form-control border-0 bg-transparent text-muted"
                        placeholder={props.placeholder}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={{ outline: "none", boxShadow: "none" }}
                  />
            </div>
      );
}
export default InputField;