import React from 'react'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import Footer from './componentes/Footer/Footer'
import Hero from './componentes/Hero/Hero'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
   
    <NavBar />
      <BrowserRouter >
      <Hero />
      <Routes>
        
        <Route path="/" element={<ItemListContainer />}/>       
        </Routes>
       
          <Footer />
      </BrowserRouter>
    
     
    </>
    
  )
}

export default App
