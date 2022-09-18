import React from 'react'
import Card from './Card';
import './ItemListContainer.css';


function ItemListContainer(props) {
  return (
    <div className='itemListContainer'>
      
      <h2>{props.greeting}</h2>
      
      <div className='productos'>
        <Card 
          title='Zapatillas' 
          detail='Zapatillas Adidas' 
          precio='1' 
          srcImg='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'
        />
        <Card 
          title='Producto 2' 
          detail='detalle 3' 
          precio='2'
          srcImg='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'
        />
        <Card 
          title='Producto 3' 
          detail='detalle 3' 
          precio='3'
          srcImg='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'
        />
      </div>
    </div>
  )
}

export default ItemListContainer;