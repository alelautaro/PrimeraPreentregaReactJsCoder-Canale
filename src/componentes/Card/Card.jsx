import React from 'react';
import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 1, height: 450, bgcolor: 'pink' }}>
      <CardMedia
        sx={{ objectFit: 'contain', width: "50%" }}
        component="img"
        image={product.image}
        title={product.name}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
          
          {product.price}
        </Typography>
      </CardContent>
      <CardActions  sx={{ justifyContent: 'center' }}>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
} export default ProductCard;