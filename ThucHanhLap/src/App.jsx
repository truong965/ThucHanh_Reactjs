import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import HomePage from './GUI/HomePage'
import SubscribePage from './GUI/SubscribePage'
import CookingGuide from './GUI/CookingGuide'
import SearchPage from './GUI/SearchPage'
import YourRecipeBox from './GUI/YourRecipeBox'
import Footer from './Component/Footer'
import Lab_5 from './GUI/lab_05'
import { Dashboard, Project, Theme, Analytics, Messages, Integrations } from './GUI/lab_05'
// import Ex1 from './GUI/ex1'
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/yourRecipeBox" element={<YourRecipeBox />}></Route>
          <Route path="/Recipes/Subscribe" element={<SubscribePage />}></Route>
          <Route path="/CookingGuide" element={<CookingGuide />}></Route>
          <Route path="/Lab_05" element={<Lab_5 />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="project" element={<Project />} />
            <Route path="theme" element={<Theme />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="messages" element={<Messages />} />
            <Route path="integrations" element={<Integrations />} />
          </Route>

          {/* <Route path="/ex1" element={<Ex1 />}></Route> */}
        </Routes>
        <Footer />
      </Router>
      {/* <Ex1></Ex1> */}
    </>
  )
}

export default App
// const [isClicked, setIsClicked] = useState(false)
// useEffect(() => {
//   setTimeout(() => {
//     const modalButton = document.getElementById("openLoginPage");
//     modalButton?.click();
//   }, 1000);

// }, []);
{/* <button id="openDiscoverPage" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#discoverModal"
        style={{ display: isClicked ? "none" : "block" }} // Ẩn button khi clicked
        onClick={() => setIsClicked(true)}>
        Open Discover
      </button>
      <div className="modal fade" id="discoverModal" aria-labelledby="discoverModalLabel" aria-hidden="true">
        <DiscoverPage />
      </div> */}
{/* <button id="openLoginPage" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal"
        style={{ display: isClicked ? "none" : "block" }} // Ẩn button khi clicked
        onClick={() => setIsClicked(true)}>
        Open Login
      </button>
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel">
        <LoginPage />
      </div> */}
{/* <CreateAccount /> */ }
{/* <ProductPage1 /> */ }
{/* <YourRecipeBox /> */ }