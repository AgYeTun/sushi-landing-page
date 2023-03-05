import React from 'react'
import Home from './pages/Home'
import 'remixicon/fonts/remixicon.css'
import Nav from './components/Navbar'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div className='bg-body-color'>
      <div className="container mx-auto">
        <Nav />
        <Home />
        <AboutUs />
      </div>
    </div>
  )
}

export default App