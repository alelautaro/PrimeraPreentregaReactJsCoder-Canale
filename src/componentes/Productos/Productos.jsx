import React from "react";


const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta básica blanca",
      price: 15.99,
      image: "remerablanca.jpg"
    },
    {
      id: 2,
      name: "Jeans clásicos azules",
      price: 29.99,
      image: "jeansAzules.jpg"
    },
    {
      id: 3,
      name: "Vestido floral veraniego",
      price: 39.99,
      image: "vestido.jpg"
    },
    {
      id: 4,
      name: "Chaqueta de cuero negra",
      price: 49.99,
      image: "chaquetanegra.jpg"
    }
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;

