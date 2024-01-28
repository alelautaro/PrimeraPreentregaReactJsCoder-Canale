import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartWidget;