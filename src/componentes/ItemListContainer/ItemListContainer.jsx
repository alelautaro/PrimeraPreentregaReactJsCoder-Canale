import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ItemContandor from "./itemcontandor";
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';




const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('./productos.json');
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
    {productos.length === 0 ? <h1>cargando..</h1> : productos.map((producto) => (
      <Box key={producto.id} sx={{ p: 1 }}>
        <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 1, height: 450, bgcolor: 'pink' }}>
          <CardMedia
            component="img"
            height="140"
            image={producto.image} 
            alt={producto.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
            <Typography variant="body1">
              {producto.price}
            </Typography>
          
          </CardContent>
          <CardActions  sx={{ justifyContent: 'center' }}>
       
      </CardActions>
      <ItemContandor/>
        </Card>
      </Box>
    ))}
  </Box>
  )};

export default ItemListContainer;