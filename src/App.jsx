import React from 'react'
import './App.css'
import NavBar from './componentes/Navbar/NavBar'
import Footer from './componentes/Footer/Footer'
import ItemListContainerr from './componentes/ItemListContainer/ItemListContainerr'
import { ThemeProvider } from './context/TemaContext'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import  Hero  from './componentes/Hero/Hero' 
import { CartProvider } from './context/Cartcontext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
        <NavBar />
        <Hero />
        <Routes>
          <Route path="/Productos" element={<ItemListContainerr />} />
         
        </Routes>

        
        <Footer />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App