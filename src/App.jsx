import React from 'react'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App  ()  {
  return (
    <>
    <div className="App">
    <NavBar/>
    <Hero/>
    <ItemListContainer/>
    <Footer/>
    </div>
    </>
  )
}

export default App