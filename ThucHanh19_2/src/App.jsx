import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaiTap1 from './components/BaiTap1.jsx'
import BaiTap2 from './components/BaiTap2.jsx'
import CusButton from './components/CusButton.jsx'
import './App.css'
import Mycomponent from './components/Mycomponent.jsx'

// function App() {
//   return (
//     //1
//     <div>
//       <BaiTap1 />
//       <br />
//       <hr />
//       <BaiTap2 />
//       <br />
//       <hr />
//       <CusButton bgColor="red" color="white" fontSize="20px" children="Change color" />

//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Mycomponent />
    </div>
  )
}
export default App
