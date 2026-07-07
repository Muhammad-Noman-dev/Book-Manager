import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import {Routes , Route , Link } from 'react-router-dom'
import Contact from './component/Contact'



const App = () => {
  return (
<div>
  
   <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
</div>
  )
}

export default App
