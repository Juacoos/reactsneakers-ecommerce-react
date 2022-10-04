import React from 'react'
import ItemList from './ItemList';
import './ItemListContainer.css';


function ItemListContainer(props) {
  return (
    <div className='itemListContainer'>
      
      <h2>{props.greeting}</h2>
      
      <div className='productos'>
        <ItemList/>
        
      </div>
      
    </div>
  )
}

export default ItemListContainer;