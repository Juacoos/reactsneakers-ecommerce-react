import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOrder } from '../../services/firebase';

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
    })
  },[])
  console.log(order)

  return (
    <>
    { order.buyerData ?
      
    <div>
      <h2>Gracias por tu compra!</h2>
      <h3>Detalles de tu compra</h3>
      <p>ID de compra {order.id}</p>
      {
        order.cart.map((prod) =>{
          return (<>
            <p>{prod.title}</p>
            <p>{prod.price}</p>
          </>)
        })
      }
      <h3>Detalles de comprador</h3>
      <p>{order.buyerData.name} {order.buyerData.email}</p>
    </div>
    :
    <>
      No se encontró pedido
    </>
    }
    </>
  )
}

export default ThankYou