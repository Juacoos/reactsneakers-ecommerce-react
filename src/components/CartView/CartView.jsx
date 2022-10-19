import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function CartView() {
  const { cart, removeItem, clearCart } = useContext(cartContext);
  console.log(cart);
  return (
    <div>
      <div>
        {
          cart.map((item)=>{
            return (
              <>
                <h2>{item.title}</h2>
                <p>cantidad {item.count}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </>
            )
          })
        }
      </div>
      <div>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default CartView