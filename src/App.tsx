import React from 'react'
import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero'
import Services from './Components/Services'
import Courses from './Components/Courses'
import MostPopular from './Components/MostPopular'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Reviews from './Components/Reviews'
import Instructors from './Components/Instructors'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Courses/>
      <MostPopular/>
      <Skills/>
      <Education/>
      <Reviews/>
      <Instructors/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App