import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'
import ItemCount from '../ItemList/ItemCount';
import { createBuyOrder } from '../../services/firebase'
import UserForm from '../UserForm/UserForm';
import './CartView.css';
import Button from '../ItemList/Button';
import '../ItemList/Button.css'
// ES6 Modules or TypeScript




function CartView() {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(cartContext);


  return (
    <div className='cartViewContainer'>
      <div className='cartViewCBox'>
        { cart.length ? 
        <>
        {
          cart.map((item)=>{
            return (
              <div className='cartItem'>
                <div className='cartContainerImg'>
                  <img src={item.img} alt={`imagen de ${item.title}`} className='cartItemImg'/>
                </div>

                <div className='cartDetailFlex'>
                
                  <div className='cartContainerItemDetails'>
                    <div className="containerDetails">
                      <h2 className='cartItemTitle'>{item.title}</h2>
                      <h4>{item.detail}</h4>
                    </div>
                    <div className='containerBtn'>
                      {/* <button onClick={() => removeItem(item.id)} className='cartItemBtn'>Eliminar</button> */}
                      <Button onClick={() => removeItem(item.id)} claseBtn={"btnDetails"}>Eliminar</Button>
                    </div>
                  </div>

                  <div className='countYPrice'>
                    <div className='cartCountYPriceContainer'>
                      <p className='cartItemCount'>Cantidad {item.count}</p>
                    </div>

                    <div className='cartCountYPriceContainer'>
                      <p className='price'>$ {item.price}</p>
                    </div>
                  </div>

                </div>
                
                  
              </div>
            )
          })
        }
          <div className='btnClearYPrice'>
            <h2 className='totalPrice'>Precio total: $ {getTotalPrice()}</h2>
            <Button onClick={() => clearCart()} claseBtn={"btnDetails"}>Vaciar carrito</Button>
          </div>
          
        </>
        :
        <>
          <h2>El carrito está vacio</h2>
          <Link to={"/"}>Agregar productos</Link>
        </>
        }
        

      </div>
      {
        cart.length ? 
        <UserForm cart={cart} getTotalPrice={getTotalPrice} />
        :
        <></>
      }


    </div>
  )
}

export default CartView