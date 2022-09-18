import React from 'react'
import './ButtonCard.css';
function ButtonCard() {
  return (
    <div className='container-btn'>
      <button className='btn btn-comprar'>
        Comprar
      </button>
      <button className='btn'>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ButtonCard;