import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOrder } from '../../services/firebase';
import Loader from '../Loader/Loader';
import '../CartView/CartView.css';
import './ThankYou.css';
import { ItemsCart } from '../CartView/CartView';

function ThankYou() {

  const { orderId } = useParams();

  const [order, setOrder] = useState({});
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  useEffect(() => {
    getOrder(orderId)
    .then( (data) =>{
      setOrder(data);
    })
    .catch( (error) =>{
      setFeedbackMsg(error.message);
      console.log("error " , error.message)
    })
  },[orderId])
  console.log("orden: " , order)
  console.log(feedbackMsg)

  return (
    <div className='cartViewContainer'>
    {
      order ?
      <>
      
      { order.buyerData ?
        
      <div className='cartViewCBox cartCBTx'>
        <h2 className='titleTx'>Gracias por tu compra, {order.buyerData.name.split(' ')[0]}!</h2> {/* Aquí hago el split para que muestre el primer nombre en el saludo*/}
        <h3>Detalles de tu compra</h3>
        <p>ID de compra <span className='bold'>{order.id}</span></p>
  
        <h4 className='prodTx'>Detalle de productos</h4>
        {
            order.cart.map((item)=>{
              return (
                <ItemsCart item={item}/>
                
              )
            })
          }
        <h2 className='totalPrice totalTx'>Precio total: $ {order.total}</h2>
        
        <h3>Detalles de comprador</h3>
        <p>{order.buyerData.name}</p>
        <p>{order.buyerData.email}</p>
        <p>{order.buyerData.phone}</p>
      </div>
      :
      <>
        <Loader/>
      </>
      }
      </>
      :
      <>
      No se encontro pedido
      </>
    }
    </div>
  )
}

export default ThankYou