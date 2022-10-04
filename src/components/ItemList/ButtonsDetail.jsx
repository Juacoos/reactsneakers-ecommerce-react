import React from 'react';
import './ButtonsDetail.css';
import ItemCount from './ItemCount';

function ButtonsDetail() {
  return (
    <div className='containerButtonsDetail'>
      <button 
        className='btnDetails btnComprar'>
        Comprar
      </button>
      <button 
        className='btnDetails'>
        Agregar al carrito
      </button>
      <ItemCount initial={1} stock={10}/>
    </div>
  )
}

export default ButtonsDetail