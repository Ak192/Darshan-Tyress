import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/home/Home'
const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
   
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
     

    </div>
    </Router>
  )
}

export default App