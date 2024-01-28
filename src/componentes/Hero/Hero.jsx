import React from "react";
import "./Hero.css"; // Estilos del Hero
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import  logotipo from "../../assets/images/AleLogo.png"


const Hero = () => {
  return (
    <>
    <div className="hero-container">
    <img src={logotipo} alt="Logo" className="logo" />
      <div>
      <p>Vendemos hasta el cansancio</p>
      </div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Button className="botoncito" size="medium">Registro</Button>
      </Box>

    </div>
    </>
  );
};

export default Hero;


