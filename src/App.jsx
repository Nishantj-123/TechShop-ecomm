import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
// import About from './components/Home/About'
import Contact from './components/Home/Contact'
import Products from './components/Home/Products'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/about' element={<AboutPage />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/products' element={<Products />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
