import React from "react";
import "./ItemListContainer.css";
import ProductCard from "../Card/Card";
import  camisa from "../../assets/images/camisaBlanca.webp";
import  jeansazules from "../../assets/images/JeansAzules.webp";
import  vestido from "../../assets/images/vestidoveraniego.webp";
import  chaquetanegra from "../../assets/images/chaquetanegradecuero.webp";
const ItemListContainer = ()=> {
  const products = [
    {
      id: 1,
      name: "Camiseta básica blanca",
      description: "Camiseta básica blanca de algodón de corte recto",
      price: 15.99,
      image: camisa
    },
    {
      id: 2,
      name: "Jeans clásicos azules",
      price: 29.99,
      description: "Jeans clásicos azules de corte recto y tiro medio",
      image: jeansazules      
    },
    {
      id: 3,
      name: "Vestido floral veraniego",
      description: "Vestido floral veraniego de algodón con escote en V",
      price: 39.99,
      image: vestido
    },
    {
      id: 4,
      name: "Chaqueta de cuero negra",
      description: "Chaqueta de cuero negra de corte entallado",
      price: 49.99,
      image: chaquetanegra
    }
  ];

  return (
    <div>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  );
};

export default ItemListContainer;