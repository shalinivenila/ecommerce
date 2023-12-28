import React from "react";
import Fashion from "./components/skirtproducts";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productdetails";
import Menu from "./pages/menu";
import Header from "./components/header";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div>
      <Header />
     
     
      <Routes>
        <Route path="/" element={<Fashion />} />{" "}
        <Route path="/productdetails/:id" element={<ProductDetails />} />{" "}
      <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
};

export default App;
