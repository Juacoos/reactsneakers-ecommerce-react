import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props){

  const [cart,setCart] = useState([]);

  function addToCart(item, count){

    let newCart = [...cart];
    let newItem = {...item,count};

    newCart.push(newItem);
    setCart(newCart);
  }

  function getTotalItemCount(){
    let total = 0;
    cart.forEach( itemInCart => {
      total += itemInCart.count;
    })
    return total;
  }

  function removeItem(idItem){
    let newCart = cart.filter( itemInCart => (itemInCart.id !== idItem))
    setCart(newCart);
  }
  
  //Hacer
  /* function clearCart() */
  /* function getTotalPrice() */
  /* function isInCart()  -  array.some */

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem }}>
        {props.children}
      </cartContext.Provider>
    </>
  )
}


export { cartContext, CartContextProvider};