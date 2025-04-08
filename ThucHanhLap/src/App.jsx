import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import HomePage from './GUI/HomePage'
import SubscribePage from './GUI/SubscribePage'
import CookingGuide from './GUI/CookingGuide'
import SearchPage from './GUI/SearchPage'
import YourRecipeBox from './GUI/YourRecipeBox'
import Footer from './Component/Footer'
import Ex1 from './GUI/ex1'
import './App.css'
function App() {
  return (
    <>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/yourRecipeBox" element={<YourRecipeBox />}></Route>
          <Route path="/Recipes/Subscribe" element={<SubscribePage />}></Route>
          <Route path="/CookingGuide" element={<CookingGuide />}></Route>
        </Routes>
        <Footer />
      </Router> */}
      <Ex1></Ex1>
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