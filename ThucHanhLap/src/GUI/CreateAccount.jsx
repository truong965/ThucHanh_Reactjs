import React from 'react';
import CusButton from '../Component/CusButton';
import InputField from '../Component/InputField';
import { mainColor } from '../FEData/colorData';
const CreateAccount = (props) => {
      return (
            <div className='d-flex align-items-center justify-content-start border border-1 rounded-4 shadow-lg p-4'>
                  <form className='mx-5'>
                        <h3>Create an account</h3>
                        <InputField label="Full Name" type="text" placeholder="your name" containerClassName='d-flex flex-column align-items-start' />
                        <InputField label="Email" type="email" placeholder="example.email@gmail.com" containerClassName='d-flex flex-column align-items-start' />
                        <InputField label="Password" type="password" placeholder="Enter at least 8+ characters" containerClassName='d-flex flex-column align-items-start' />
                        <CusButton clsName="btn px-5 my-4 w-100" backgroundColor={mainColor} textColor="#ffffff" >Sign in</CusButton>
                        <p>Or sign in with</p>
                        <div className='d-flex justify-content-center align-items-center'>
                              <CusButton clsName="btn px-5 m-2 rounded-4" backgroundColor="#fef1f1" textColor="#ea4336" ><i className="fa-brands fa-google" /></CusButton>
                              <CusButton clsName="btn px-5 m-2 rounded-4" backgroundColor="#f3f6fb" textColor="#465f97" ><i className="fa-brands fa-facebook-f" /></CusButton>
                              <CusButton clsName="btn px-5 m-2 rounded-4" backgroundColor="#f3f4f6" textColor="#000000" ><i className="fa-brands fa-apple" /></CusButton>
                        </div>
                  </form>
                  <img style={{ height: "100%", objectFit: "contain" }} src="../src/FEData/createAcc.png" alt="" />
            </div>
      );
}
export default CreateAccount;