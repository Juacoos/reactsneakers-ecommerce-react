import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'
import { createBuyOrder } from '../../services/firebase'
import UserForm from '../UserForm/UserForm';
// ES6 Modules or TypeScript




function CartView() {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(cartContext);


  return (
    <div>
      <div>
        { cart.length ? 
        <>
        {
          cart.map((item)=>{
            return (
              <>
                <h2>{item.title}</h2>
                <p>cantidad {item.count}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar (Poner emoji)</button>
              </>
            )
          })
        }
        <h2>Total Precio: {getTotalPrice()}</h2>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <UserForm cart={cart} getTotalPrice={getTotalPrice} />
        </>
        :
        <>
          <h2>El carrito está vacio</h2>
          <Link to={"/"}>Agregar productos</Link>
        </>
        }
        
        

      </div>


      <div>

        
      </div>
    </div>
  )
}

export default CartView