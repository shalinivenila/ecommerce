import React, { useState } from "react";
import { useEffect } from "react";
import skirtData from "../components/skirt.json";
import "../App.css";


const Cart = () => {
const [cartItems,setCartItems] = useState();

  useEffect(() => {
     const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
     setCartItems(storedCartItems);
  },[]);

 

  

  return (
    <div>
      <div className="cartmain">
        <div className="cart">
          <div className="carthead">Shopping Cart</div>
          <div class="flex-containers">
          
  <div className="cartimg"><img src="https://media.istockphoto.com/id/882157056/photo/red-elegant-skirt-with-ribbon-bow-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=AUVtYb1z1CzmHH9mGRiVt4fImNLcb3gzhPqqtbOQxBA=" /></div>
  <div className="carttitle">Floral mini skirt</div>
  <div className="cartprice">$1179</div> 
  <div className="cartimg"><img src="https://media.istockphoto.com/id/882157056/photo/red-elegant-skirt-with-ribbon-bow-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=AUVtYb1z1CzmHH9mGRiVt4fImNLcb3gzhPqqtbOQxBA=" /></div>
  <div className="carttitle">Floral mini skirt</div>
  <div className="cartprice">$1179</div> 
          
  
  </div>
          
  <div className="total">Sub-Total</div>
  <div className="cost">$ 22485</div>
        </div>
       
       
      </div>
    </div>
  );
};
export default Cart;
