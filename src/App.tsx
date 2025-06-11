import React from 'react'
import NavBar from './Component/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'
import Contactus from './Pages/Contactus'

function App() {
  return (
    <div>
      
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Aboutus' element={<Aboutus />}/>
        <Route path='Services' element={<Services />}/>
        <Route path='Gallery' element={<Gallery />}/>
        <Route path='Shop' element={<Shop />}/>
        <Route path='contactus' element={<Contactus />}/>
      </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App