import React from 'react'
import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero'
import Services from './Components/Services'
import Courses from './Components/Courses'
import MostPopular from './Components/MostPopular'
import Skills from './Components/Skills'
import Education from './Components/Education'

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
    </div>
  )
}

export default App