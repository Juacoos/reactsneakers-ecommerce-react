import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import './ItemListContainer.css';


function ItemListContainer(props) {
  return (
    <div className='itemListContainer'>
      
      <h2>{props.greeting}</h2>
      
      <div className='productos'>
        <ItemList/>
        
      </div>
      <div className='contador'>
        <h3>Contador</h3>
        <p>Aclaración: La idea es ponerlo como está en los "Item". Esto se va a borrar más adelante.</p>
        <ItemCount width={100} initial={1} stock={10} />
      </div>
    </div>
  )
}

export default ItemListContainer;