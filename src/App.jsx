import React from 'react'
import Home from './pages/Home'
import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import Nav from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Popular from './pages/Popular'
import Recently from './pages/Recently'
import Newsletter from './pages/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-body-color'>
      <div className="container mx-auto">
        <Nav />
        <Home />
        <AboutUs />
        <Popular />
        <Recently />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App