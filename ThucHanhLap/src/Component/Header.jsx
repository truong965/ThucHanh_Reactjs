import React, { useRef } from 'react'
import './Header.css'
import CusButton from './CusButton'
import { useNavigate } from 'react-router-dom';
import LoginPage from '../GUI/LoginPage';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
const dataLogin = JSON.parse(localStorage.getItem('dataLogin')) || null;

const handleLogin = () => {
      console.log("Login button clicked");
      const modalElement = document.getElementById("loginModal");
      if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
            // Xóa modal khi component unmount
            return () => {
                  modal.hide();
                  document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove()); // Xóa lớp nền đen
            };
      }
}

const Header = (props) => {
      const navigate = useNavigate();
      const inputRef = useRef(null);
      const handleKeyEnter = (e) => {
            const searchQuery = inputRef.current.value.trim();
            if (searchQuery !== "") {
                  if (e.key === "Enter") {
                        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                  }
            }
      }
      const handleSubscribe = () => {
            navigate("/Recipes/Subscribe");
      }
      const handleYourRecipeBox = () => {
            navigate("/yourRecipeBox");
      }

      return (
            <div style={{ minWidth: "1200px" }} className="header d-flex justify-content-between align-items-center w-100">
                  < div className='d-flex justify-content-start align-items-center' >
                        <img src="../src/FEData/logo.png" alt="logo" />
                        <h3 style={{ color: "#f44b87" }} className="d-inline-block p-0 m-0">Chefify</h3>
                  </div >
                  <div className='d-flex justify-content-start align-items-center mx-4 p-2 rounded-4' style={{ background: "#f3f4f6" }}>
                        <i className="fas fa-search fs-5 "></i>
                        <input ref={inputRef} style={{ background: "#f3f4f6", border: "none", color: "#000000" }} type="text" placeholder="  Search" onKeyDown={(e) => handleKeyEnter(e)} />
                  </div>

                  <ul className="list-group list-group-horizontal">
                        <li className='list-group-item py-0 px-2'><a href="#">What to cook</a></li>
                        <li className='list-group-item py-0 px-2'><a href="#">Recipes</a></li>
                        <li className='list-group-item py-0 px-2'><a href="#">Ingredients</a></li>
                        <li className='list-group-item py-0 px-2'><a href="#">Occasions</a></li>
                        <li className='list-group-item py-0 px-2'><a href="#">About Us</a></li>
                  </ul>
                  <div className='d-flex justify-content-start align-items-center mx-2'>
                        {dataLogin != null ? (
                              <>
                                    <CusButton clsName="btn px-2 mx-2" backgroundColor="#fef0f5" textColor="#f44b87" onClick={handleYourRecipeBox}>
                                          <i className="fas fa-cookie"></i> Your Recipe Box
                                    </CusButton>
                                    <img src="../src/FEData/profileImage.png" alt="profileImage" />
                              </>
                        ) : (
                              <>
                                    <CusButton clsName="btn px-2 mx-2" backgroundColor="#fef0f5" textColor="#f44b87" onClick={handleLogin}>
                                          Login
                                    </CusButton>
                                    <CusButton clsName="btn px-2 mx-2" backgroundColor="#fef0f5" textColor="#f44b87" onClick={handleSubscribe}>
                                          Subscribe
                                    </CusButton>
                              </>
                        )}
                  </div>
                  <LoginPage />
            </div >
      );
}
export default Header;