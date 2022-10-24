import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props){

  const [cart,setCart] = useState([]);

  const isInCart = (id) => cart.find(item => item.id === id) ? true : false;

  function addToCart(item, count){
    if(isInCart(item.id)){
      setCart(cart.map(product =>{
        return product.id === item.id ? { ...product, count: product.count + count} : product;
      }))
    } else {
      setCart( [ ...cart, {...item, count} ] )
    }
    
    /* let newCart;
    let itemAdd = cart.find(product => product.id === item.id);
    if(itemAdd){
      itemAdd.count += count;
      newCart = [...cart];
    }
    else{
      itemAdd = {...item, count: count};
      newCart = [...cart, itemAdd];
    }
    setCart(newCart); */

    /* let newCart = [...cart];
    let newItem = {...item,count};
    newCart.push(newItem);
    setCart(newCart); */
  }

  function getTotalItemCount(){
    let total = 0;
    cart.forEach( itemInCart => {
      total += itemInCart.count;
    })
    return total;
  }
  function getTotalPrice(){
    let total = 0;
    cart.forEach( itemInCart => {
      total += itemInCart.price * itemInCart.count;
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
  function clearCart(){
    setCart([]);
  }
  

  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, getTotalPrice, removeItem, clearCart, isInCart}}>
        {props.children}
      </cartContext.Provider>
    </>
  )
}


export { cartContext, CartContextProvider};