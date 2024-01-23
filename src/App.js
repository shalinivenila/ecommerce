import React from "react";
import Fashion from "./components/skirtproducts";
import {useNavigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productdetails";
import Registration from "./pages/registration";
import Header from "./components/header";
import Cart from "./pages/cart";
import Counter from "./component/counter";
import Login from "./pages/login";
import { useEffect } from "react";


const App =() =>{
const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    console.log("User is logged in");
    // navigate("/");
  } else {
    console.log("User is not logged in");
    navigate("/login");
  }
}, []);


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Fashion />} />{" "}
        <Route path="/productdetails/:id" element={<ProductDetails />} />{" "}
      <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
  };

export default App;
