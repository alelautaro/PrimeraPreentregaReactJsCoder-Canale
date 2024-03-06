import React from "react";
import productos from "/public/productos.json";
import Item from "./Item.jsx";

 const ItemListContainerr= () => {
  return (
    <div className>
      {productos.map((productos, idx) => {
        return <Item key={productos.id} {...productos} />;
      })}
    </div>
  );
};

export  default ItemListContainerr;