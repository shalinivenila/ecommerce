import React, { useState, useEffect } from "react";
import "../App.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("setItem")) || [];
    console.log(storedCartItems)
    setCartItems(storedCartItems);
  }, []);

  console.log(cartItems)
  return (
    <div>
      <div className="cartmain">
        <div className="cart">
          <div className="carthead">Shopping Cart</div>

        
            <div className="flex-containers">
              <div className="cartimg">
                <img src={cartItems.thumbnail} alt={cartItems.brand} />
              </div>
              <div className="carttitle">{cartItems.brand}</div>
              <div className="cartprice">{`$${cartItems.price}`}</div>
            </div>
          

          <div className="total">Sub-Total</div>
          <div className="cost">
            {`$ ${((total, item) => total + item.price, 0)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
