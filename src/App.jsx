import React from 'react'
import Story from './Pages/Story/Story'
import Contact from './Pages/contact/Contact'
import StructuralDesign from './Pages/Project/StructureDesign'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import Services from './Pages/Service/Services'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
      <Route path="/story" element={<Story />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<StructuralDesign />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
