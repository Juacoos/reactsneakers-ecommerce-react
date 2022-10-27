import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
// import ItemCount from "../ItemList/ItemCount";
import UserForm from "../UserForm/UserForm";
import "./CartView.css";
import Button from "../ItemList/Button";
import "../ItemList/Button.css";
import { useState } from "react";


export function ItemsCart(props) {

  const { isInCart } =
    useContext(cartContext);

  return (
    <div className="cartItem">
      <div className="cartContainerImg">
        <img
          src={props.item.img}
          alt={`imagen de ${props.item.title}`}
          className="cartItemImg"
        />
      </div>

      <div className="cartDetailFlex">
        <div className="cartContainerItemDetails">
          <div className="containerDetails">
            <h2 className="cartItemTitle">{props.item.title}</h2>
            <h4>{props.item.detail}</h4>
          </div>
          <div className="containerBtn">
            {
              //Este condicional lo hago para que en la orden de compra no aparezca el botón de eliminar
              isInCart(props.item.id) 
              &&
              <Button
                onClick={() => props.removeItem(props.item.id)}
                claseBtn={"btnDetails btnMargin0"}>
                {props.btnRemoveChildren}
              </Button>
            }
          </div>
        </div>

        <div className="countYPrice">
          <div className="cartCountYPriceContainer">
            <p className="cartItemCount">Cantidad {props.item.count}</p>
          </div>

          <div className="cartCountYPriceContainer">
            <p className="price">$ {props.item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function CartView() {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(cartContext);

  const [formActivo, setFormActivo] = useState(false);
  const handleForm = () => {
    setFormActivo(true);
  };
  return (
    <div className="cartViewContainer">
      <div className="cartViewCBox">
        {cart.length ? (
          <>
            {cart.map((item) => {
              return (
                <ItemsCart removeItem={removeItem} btnRemoveChildren={"Eliminar"} item={item}></ItemsCart>
              );
            })}
            <div className="btnClearYPrice">
              <h2 className="totalPrice">Precio total: $ {getTotalPrice()}</h2>
              <Button
                onClick={() => clearCart()}
                claseBtn={"btnDetails btnMargin0"}
              >
                Vaciar carrito
              </Button>
            </div>
            <Button
              onClick={handleForm}
              claseBtn={"btnDetails btnComprar btnCart"}
            >
              Realizar compra
            </Button>
          </>
        ) : (
          <>
            <h2>El carrito está vacio</h2>
            <Link to={"/"}>Agregar productos</Link>
          </>
        )}

        {formActivo && cart.length ? (
          <UserForm cart={cart} getTotalPrice={getTotalPrice} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
