import React, { useState } from 'react'
import './ItemCount.css';

function ItemCount({ stock, initial}) {

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
    <div className='countContainer'>
      <button className='restaBtn' onClick={restaItem}>
        -
      </button>

      <strong>{count}</strong>
      
      <button className='sumaBtn' onClick={sumaItem}>
        +
      </button>
    </div>
  )
}

export default ItemCount;