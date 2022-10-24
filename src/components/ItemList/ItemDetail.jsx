import React, { useState, useContext } from 'react'
import Button from './Button';
import ItemCount from './ItemCount';
import './ItemDetail.css';
import './Button.css';
import { Link, useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import Loader from '../Loader/Loader';



function ItemDetail({ item }) {
  const { itemID } = useParams();

  const [count, setCount] = useState(0);

  const {addToCart, removeItem, isInCart } = useContext(cartContext);

  function onAddToCart(count) {

      console.log("Agregaste items al carrito:", item, count);
      addToCart(item, count)
      setCount(count);

  }
  

  if( item.title )
  return (
    <div className='itemDetail'>

      <div className='detailContainerImg'>
        <img className='detailImg'
          src={item.img} 
          alt={item.alt}/>
      </div>

      <div className='detailContainerContent'>
        <div>
          <h1 className='titleDetail'>{item.title}</h1>
          <h2 className='priceDetail'>$ {item.price}</h2>
        </div>
        
        <div className={'containerButtonsDetail'}>
          <p className='details'>{item.detail}</p>

          {/* Contador y Boton para A. al carrito. Cuando hay items, aparece botón para ver el carrito. */}
          
          { !isInCart(itemID) ?
          <ItemCount 
          onAddToCart={onAddToCart}
          text={"Agregar al carrito"}
          initial={1} 
          stock={10}
          /> 
          : 
          <>
          <h5 className='details'>El producto fue agregado al carrito!</h5>
          <Button claseBtn={"btnDetails"}><Link to={"/cart"}>Ver carrito</Link></Button>
          </>
          }
          {/* <button onClick={() => removeItem(item.id)}>Eliminar</button> */}
        </div>

      </div>
    </div>
  )
  return <Loader/>
}

export default ItemDetail