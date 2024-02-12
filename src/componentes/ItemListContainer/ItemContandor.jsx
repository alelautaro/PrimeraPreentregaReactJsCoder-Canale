import React, { useState } from 'react';
import './ItemContandor.css';
import Snackbar from '@mui/material/Snackbar';



const ItemContandor = () => {

const [contador, setContador] = useState(1);

const disminuir = () => {
    if(contador > 1){
        setContador(contador - 1);
    }
}

const aumentar = () => {
    if(contador < 10){
        setContador(contador + 1);
    }
}




    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }
      const agregaralcarrito = () => {
        setOpen(true);
}

return (
    <div>
        <h1>{contador}</h1>
        <button className='btn-disminuir' onClick={disminuir}>-</button>
        <button className="btn-aumentar"  onClick={aumentar}>+</button>
        <button className="btn-agregar" onClick={agregaralcarrito}>Agregar al carrito</button>
        <Snackbar
            message={`total de productos: ${contador}`}
            open={open}
            onClose={handleClose} />
    </div>
)
}

export default ItemContandor