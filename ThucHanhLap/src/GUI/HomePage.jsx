import React,{useEffect } from 'react'
import DiscoverPage from './DiscoverPage'

const HomePage = () => {
      localStorage.setItem("dataLogin", null);
      return (
            <div>
                  <h1>HomePage</h1>
                  <DiscoverPage />
            </div>
      )
}
export default HomePage