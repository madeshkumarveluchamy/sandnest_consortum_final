import React from 'react'
import Story from './Pages/Story/Story'
import Contact from './Pages/contact/Contact'
import StructuralDesign from './Pages/Project/StructureDesign'
import ArchitecturalDesign from './Pages/Project/ArchitecturalDesign'
import InteriorDesign from './Pages/Project/InteriorDesign'
import LandscapeDesign from './Pages/Project/LandscapeDesign'
import SustainableGreenBuildings from './Pages/Project/SustainableGreenBuildings'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import Services from './Pages/Service/Services'
import ProjectDetailPage from './Pages/ProjectDetail/ProjectDetailPage'
import ProjectDetailPage1 from './Pages/ProjectDetail/ProjectDetailPage1'
import ProjectDetailPage2 from './Pages/ProjectDetail/ProjectDetailPage2'
import ProjectDetailPage3 from './Pages/ProjectDetail/ProjectDetailPage3'
import ProjectDetailPage4 from './Pages/ProjectDetail/ProjectDetailPage4'
import ProjectDetailPage5 from './Pages/ProjectDetail/ProjectDetailPage5'
import ProjectDetailPage6 from './Pages/ProjectDetail/ProjectDetailPage6'
import ProjectDetailPage7 from './Pages/ProjectDetail/ProjectDetailPage7'
import ProjectDetailPage8 from './Pages/ProjectDetail/ProjectDetailPage8'
import ProjectDetailPage9 from './Pages/ProjectDetail/ProjectDetailPage9'
import ProjectDetailPage10 from './Pages/ProjectDetail/ProjectDetailPage10'
import ProjectDetailPage11 from './Pages/ProjectDetail/ProjectDetailPage11'
import ProjectDetailPage12 from './Pages/ProjectDetail/ProjectDetailPage12'
import ProjectDetailPage13 from './Pages/ProjectDetail/ProjectDetailPage13'
import ProjectDetailPage14 from './Pages/ProjectDetail/ProjectDetailPage14'
import ProjectDetailPage15 from './Pages/ProjectDetail/ProjectDetailPage15'
import ProjectDetailPage16 from './Pages/ProjectDetail/ProjectDetailPage16'
import ProjectDetailPage17 from './Pages/ProjectDetail/ProjectDetailPage17'
import ProjectDetailPage18 from './Pages/ProjectDetail/ProjectDetailPage18'
import ProjectDetailPage19 from './Pages/ProjectDetail/ProjectDetailPage19'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
      <Route path="/our-studio" element={<Story />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/structural-design" element={<StructuralDesign />} />
      <Route path="/architectural-design" element={<ArchitecturalDesign />} />
      <Route path="/interior-design" element={<InteriorDesign />} />
      <Route path="/landscape-design" element={<LandscapeDesign />} />
      <Route path="/sustainable-green-buildings" element={<SustainableGreenBuildings />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />


      {/* project detail */}

      <Route path="/projectdetail" element={<ProjectDetailPage/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage1/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage2/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage3/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage4/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage5/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage6/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage7/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage8/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage9/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage10/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage11/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage12/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage13/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage14/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage15/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage16/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage17/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage18/>} />
      <Route path="/projectdetail" element={<ProjectDetailPage19/>} />
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
