import React, { useState } from "react";
import InputForm from "./InputForm";
import { useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firebase'
import { cartContext } from '../../context/cartContext'

import Swal from 'sweetalert2'
import { useContext } from "react";
import './UserForm.css'
import Button from "../ItemList/Button";

export default function UserForm({ cart, getTotalPrice }) {
  const navigate = useNavigate();

  const { clearCart } = useContext(cartContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });


  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = {...userData}
    newUserData[name] = value
    setUserData(newUserData)
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData ={ 
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date()
    };
    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Gracias!",
        text: "Gracias por tu compra",
        icon: "success",
        confirmButtonText: "Cool",
      }).then((result) => {
        navigate(`/thankyou/${respuesta}`);
      });
      //Importante acá el clearCart
      clearCart();
    });
  }

  

  return (   
    <div className="formContUpper">
      <div className="formContainer">
        <div class="formulario__texto">
          <h3 class="formulario__titulo">Ingresá tus datos para realizar la compra!</h3>
        </div>

        <form className="form" onSubmit={onSubmit}>
            <InputForm value={userData.name} title="Nombre" name="name" required={true} placeholder={"Nombre"} onChange={onInputChange}/>
            <InputForm value={userData.email}  title="Email" name="email" required={true} placeholder={"Email"} onChange={onInputChange}/>
            <InputForm value={userData.phone}  title="Teléfono" name="phone" placeholder={"Teléfono"} onChange={onInputChange}/>    
            {/* <button  type="submit">
              Crear orden
            </button> */}
            <div className="btnFormCont">
              <Button claseBtn={"btnComprar btnForm"} type={"submit"}>Crear orden</Button>
            </div>
        </form>
      </div>
    </div>
    );
}
