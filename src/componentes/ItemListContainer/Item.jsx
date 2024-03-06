import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "/src/context/Cartcontext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./item.css";

const Item = ({ id, name, description, price, image, category }) => {
  const [cart, setCart] = useContext(CartContext);

  const agregarAlCarrito = () => {
    setCart((productosActuales) => {
      const itemExistente = productosActuales.find((item) => item.id === id);
      if (itemExistente) {
        return productosActuales.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...productosActuales, { id, cantidad: 1, precio: price }];
      }
    });
  };
  
  const restarDelCarrito = () => {
    setCart((productosActuales) => {
      const itemExistente = productosActuales.find((item) => item.id === id);
      if (itemExistente && itemExistente.cantidad > 1) {
        return productosActuales.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad - 1 };
          } else {
            return item;
          }
        });
      } else {
        return productosActuales.filter((item) => item.id !== id);
      }
    });
  };

  const getCantidadPorId = (id) => {
    return cart.find((item) => item.id === id)?.cantidad || 0;
  };

  const cantidadPorItem = getCantidadPorId(id);

  return (
    <Box sx={{ p: 0 }}>
      <Card sx={{ width: 210, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2, bgcolor: 'pink' }}>
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body1">
            {price}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
          <Button variant="contained" onClick={restarDelCarrito}>-</Button>
          <Typography variant="body1">{cantidadPorItem}</Typography>
          <Button variant="contained" onClick={agregarAlCarrito}>+</Button>
        </div>
        <Link to="/carrito"> {/* Utiliza el componente Link para crear el enlace al carrito */}
          <Button variant="contained">Comprar</Button> {/* Botón "Comprar" */}
        </Link>
      </Card>
    </Box>
  );
};

export default Item;
