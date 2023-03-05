import React from 'react'
import Home from './pages/Home'
import 'remixicon/fonts/remixicon.css'
import Nav from './components/Navbar'

const App = () => {
  return (
    <div className='bg-body-color'>
      <div className="container mx-auto">
        <Nav />
        <Home />
      </div>
    </div>
  )
}

export default App