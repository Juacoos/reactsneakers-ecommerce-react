import React, { useState } from 'react'
import Button from './Button';
import './ItemCount.css';

function ItemCount({ stock, initial, text, onAddToCart}) {

  const [count, setCount] = useState(initial);

  function sumaItem(){
    if(count < stock){
      setCount(count + 1);
    }
  }

  function restaItem(){
    if(count > 1){
      setCount(count - 1);
    }
  }
  return (
    <>
    <div className='countContainer'>
      <button className='restaBtn' onClick={restaItem}>
        -
      </button>

      <strong>{count}</strong>
      
      <button className='sumaBtn' onClick={sumaItem}>
        +
      </button>
      
    </div>
    <Button 
      onClick={
        () => { onAddToCart(count); }
      }
      claseBtn={'btnDetails'}>
      {text}
    </Button> 
    </>
  )
}

export default ItemCount;