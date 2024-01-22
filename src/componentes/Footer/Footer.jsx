import React from "react";
import "./Footer.css"; 
const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="footer-container">
      <p>© {currentDate}  - Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
