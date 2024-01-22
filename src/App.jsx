import React from 'react'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'
import Productos from './componentes/Productos/Productos'


function App  ()  {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Productos/>
    <Footer/>
    </>
  )
}

export default App