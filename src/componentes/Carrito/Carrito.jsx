import React, { useContext } from "react";
import { CartContext } from "/src/context/Cartcontext";

export const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);

  const cantidadTotal = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  const precioTotal = cart.reduce(
    (acc, curr) => acc + curr.cantidad * curr.precio,
    0
  );

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <div className="cart-container">
      <div>
        <div>Productos en el carrito: {cantidadTotal}</div>
        <div>Total: ${precioTotal}</div>
       <div> <button onClick={vaciarCarrito}>Vaciar Carrito</button></div>
        <button onClick={() => console.log(cart)}>Pagar</button>
      </div>
    </div>
  );
};
