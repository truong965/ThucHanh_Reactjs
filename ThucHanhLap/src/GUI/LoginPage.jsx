import React, { useRef } from "react";
import 'font-awesome/css/font-awesome.min.css';

import CusButton from "../Component/CusButton";
import { mainColor } from "../FEData/colorData";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LineAndTextComponent from "../Component/LineAndTextComponent";
import './LoginPage.css';
import { data } from "react-router-dom";
const LoginPage = (props) => {
      const inputRef = useRef(null);
      const handleNextButton = () => {
            if (inputRef.current.value.trim() !== "") {
                  localStorage.setItem("dataLogin", JSON.stringify(inputRef.current.value));
                  window.location.reload();
            }
      }
      return (
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel">
                  <div className="modal-dialog modal-dialog-centered modal-xl d-flex flex-row align-items-stretch justify-content-center">
                        <div className="image-container">
                              <h4 className="text-light text-overlay">"Embrace the art of cooking, where flavors come alive!"</h4>
                              <img className="image rounded-start" src="./src/FEData/loginImg.png" />
                        </div>
                        <div className="modal-content  rounded-0 rounded-end border-0 border-start">
                              <div className="mx-3 modal-header d-flex justify-content-between">
                                    <h3 className="modal-title fw-2">Login</h3>
                                    <button type="button" className="btn-close fs-4" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="mx-3 modal-body">
                                    <h5 className="my-3 fw-normal text-start">Enter your email to login</h5>
                                    <input ref={inputRef} style={{ backgroundColor: "#f3f4f6", color: "#000000" }} className="w-100 border border-2 py-2 rounded-3" type="text" placeholder=" enter your email" />
                                    <CusButton clsName="btn px-5 my-4 w-100" backgroundColor={mainColor} textColor="#ffffff" onClick={handleNextButton}>Continue</CusButton>
                                    <LineAndTextComponent className="my-3" content="OR" ></LineAndTextComponent>
                                    <p className="text-black-50">By continuing, you agree to the updated <b>Terms of Sale, Terms of Service,</b> and <b>Privacy Policy.</b></p>
                                    <CusButton clsName="btn px-5 my-2 w-100" backgroundColor="#f1f4fe" textColor="#ea4336" ><i className="fa-brands fa-google" /> Continue with Google</CusButton>
                                    <CusButton clsName="btn px-5 my-2 w-100" backgroundColor="#f1f4fe" textColor="#465f97" ><i className="fa-brands fa-facebook-f" /> Continue with Facebook</CusButton>
                                    <CusButton clsName="btn px-5 my-2 w-100" backgroundColor="#f1f4fe" textColor="#000000" ><i className="fa-brands fa-apple" /> Continue with Apple</CusButton>
                              </div>
                        </div>
                  </div >
            </div>
      );
}
export default LoginPage;