import React from 'react';
import CusButton from './CusButton';
import './Footer.css';
const Footer = (props) => {
      return (
            <footer className='footer bg-black text-white p-3 row'>
                  <div className='col-7 d-flex justify-content-start align-items-start flex-column'>
                        <h6>About Us</h6>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                        <div className='mb-auto d-flex w-100'>
                              <input className='bg-white flex-grow-1 w-100 rounded-3' type="text" placeholder='  Enter your email' />
                              <CusButton clsName="btn px-5 mx-2" backgroundColor="#f44b87" textColor="#f1f4fe" >Send</CusButton>
                        </div>
                        < div className='mb-2 d-flex justify-content-start align-items-end' >
                              <img style={{ width: "10%" }} src="../src/FEData/logo.png" alt="logo" />
                              <h3 style={{ color: "#ffffff" }} className="d-inline-block p-0 m-0">Chefify</h3>
                              <p className='mx-4 my-0'> © 2021 Chefify Company</p>
                              <a href="#" className='my-0'>Terms of Servicel Privacy Policy</a>
                        </div >
                  </div>
                  <div className='col-3 d-flex justify-content-start align-items-start flex-column'>
                        <div className='mb-auto'>
                              <h6 >Learn More</h6>
                              <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Our Cooks</a>
                                    <a href="#" className="list-group-item list-group-item-action">See Our Features</a>
                                    <a href="#" className="list-group-item list-group-item-action">FAQ</a>
                              </div>
                        </div>
                        <div >
                              <h6>Shop</h6>
                              <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Gift Subscription</a>
                                    <a href="#" className="list-group-item list-group-item-action">Send Us Feedback</a>
                              </div>
                        </div>

                  </div>
                  <div className='col-2 d-flexjustify-content-content-start align-items-start flex-column'>
                        <h6 >Recipes</h6>
                        <div className="list-group">
                              <a href="#" className="list-group-item list-group-item-action">What to Cook This Week</a>
                              <a href="#" className="list-group-item list-group-item-action">Pasta</a>
                              <a href="#" className="list-group-item list-group-item-action">Dinner</a>
                              <a href="#" className="list-group-item list-group-item-action">Healthy</a>
                              <a href="#" className="list-group-item list-group-item-action">Vegetarian</a>
                              <a href="#" className="list-group-item list-group-item-action">Vegan</a>
                              <a href="#" className="list-group-item list-group-item-action">Christmas</a>

                        </div>
                  </div>
            </footer>
      );

}
export default Footer;