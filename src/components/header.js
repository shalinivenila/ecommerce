import React from "react";
import { useNavigate } from "react-router-dom";
import skirtData from "../components/skirt.json";

const Header = () => {
  const navigate = useNavigate();



const navigateToCartPage = () => {
navigate(`/cart`);
  };
  return (
    <div>
      <div className="container">
        <div className="main"> FOREVER 21 </div>{" "}
        <div onClick={() => navigateToCartPage()} className="carticon"><i class="fa fas fa-shopping-cart"></i></div>
      </div>{" "}
    </div>
  );
};

export default Header;
