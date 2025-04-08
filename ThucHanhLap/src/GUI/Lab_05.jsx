import React, { use } from "react";
import { NavLink } from "react-router-dom";
import "./Lab_05.css"
const Lab_5 =()=>{
    return(
        <div class="grid grid-rows-4 grid-cols-4 gap-2">
        <div class="row-span-4 col-span-1 border border-2">
            <div className="grid grid-cols-1 gap-2">
                <img src="../src/FEData/logo2.png" alt="error" />
                <NavLink to="/Lab_05" className="nav-link"   activeClassName="active" >
                Dashboar
                </NavLink>
                <NavLink to="/Lab_05/project" className="nav-link" >
                    Project
                </NavLink>
                <NavLink to="/Lab_05/theme" className="nav-link"  >
                    Theme
                </NavLink>
                <NavLink to="/Lab_05/analytics"  className="nav-link" >
                    Analytics
                </NavLink>
                <NavLink to="/Lab_05/messages"  className="nav-link"  >
                    Messages
                </NavLink>
                <NavLink
                    to="/Lab_05/integrations"
                    className="nav-link" >
                    Integrations
                </NavLink>
                <div>
                        <img src="../src/FEData/v2.png" alt="error" />
                        <h2>V2.0 is available</h2>
                        <button className="w-1/2 text-blue-500 bg-transparent border-2 border-blue-500 px-4 py-2 rounded " >try now</button>
                </div>
            </div>
        </div>
        <div class="col-span-3 border border-2">
            <div className="flex items-center">
                <h3 className="flex-1 text-left text-pink-500 ms-5">Dashboard</h3>
                <div>
                    <input 
                    type="text"
                    placeholder="search"
                    className="border border-black rounded bg-gray-50"/>
                </div>
                <img src="../src/FEData/notifi.png" alt="error" />
                <img src="../src/FEData/question.png" alt="error" />
                <img src="../src/FEData/small_user_img.png" alt="error" />
            </div>
        </div>
        <div class="col-span-3 border border-2">
            <h3 className="text-pink-500 text-left ms-5">Overview</h3>
            <div className="grid grid-cols-3 gap-2">
                <div className="flex justify-content-center border border-2">
                    <div className="flex flex-col">
                        <h6 className="text-start">Turnover</h6>
                        <h1 className="text-start">$92,405</h1>
                        <span className="text-start">5.39% <span> period of change</span> </span>
                    </div>
                    <img className="self-start" src="../src/FEData/cart.png" alt="err" />
                </div>
                <div className="flex justify-content-center border border-2">
                    <div className="flex flex-col">
                        <h6 className="text-start">Turnover</h6>
                        <h1 className="text-start">$92,405</h1>
                        <span className="text-start">5.39% <span> period of change</span> </span>
                    </div>
                    <img className="self-start" src="../src/FEData/cart.png" alt="err" />
                </div>
                <div className="flex justify-content-center border border-2">
                    <div className="flex flex-col">
                        <h6 className="text-start">Turnover</h6>
                        <h1 className="text-start">$92,405</h1>
                        <span className="text-start">5.39% <span> period of change</span> </span>
                    </div>
                    <img className="self-start" src="../src/FEData/cart.png" alt="err" />
                </div>
            </div>
        </div>
        <div class="row-span-2 col-span-3 border border-2">report</div>
        </div>
        )
}
export default Lab_5;