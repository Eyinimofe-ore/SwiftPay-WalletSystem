import React from 'react'
import Landing from '../Components/Landing/Landing'
import About from '../Components/About/About'
import Features from '../Components/Features/Features'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Works from '../Components/Works/Works'



function Homepage() {
  return (
    <div>
        <Landing/>
        <About/>
        <Features/>
        <Works/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
