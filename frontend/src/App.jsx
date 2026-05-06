import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <>
      <div>
        <NavBar/>
        <HeroSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
