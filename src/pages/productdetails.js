import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import skirtData from "../components/skirt.json";
import { Button } from "@mui/material";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }

        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
        setProductData(null);
      }
    };

    fetchProductData();
  }, [numericId]);

  if (!productData) {
    return <div>Product not found</div>;
  }
  console.log(productData)

  const filteredProduct = productData.products?.filter(
  (product) => product.id === numericId
  )[0];
  console.log(filteredProduct)
  if (!filteredProduct) {
  return <div> Product not found </div>;
  }
console.log(filteredProduct);

  const imageArray = [
   "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
   "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
   "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww",
   "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
   "https://infinix-staging-s3.s3.ap-south-1.amazonaws.com/media/liocz2v3/quartz-green-6.png",
  ]

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const sendCart = () => {
    const setString = JSON.stringify(filteredProduct);
  
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("setItem", setString);
    } else {
      console.error("localStorage is not available in this environment.");
    }
  }



  return (
  <div>
   
  <div className="productitem">
 {imageArray.map((image, index) => (
        <img style={{width:"40%",height:"118px",display:"flex",display:"table-column",marginBottom:"10px",marginLeft:"20px"}} key={index} 
        src={image} alt={`Image ${index + 1}`}  onClick={() => handleImageClick(image)}/>
      ))}
 
  </div>

      <div className="productlayout">
      <div className="productimg">
      <img className="detailimg" src={selectedImage || filteredProduct.images[0]} alt={filteredProduct.brand} />
      </div>{" "}
      <div className="productinfo">
      <div className="productitle"> {filteredProduct.brand} </div>{" "}
      <div className="produtprice"> {filteredProduct.price}</div>{" "}
      <div className="productpara">
      {" "}{filteredProduct.description}
      {" "}
      </div>{" "}
      <div className="productpara">
      {" "}{filteredProduct.description}
      {" "}
      </div>
      <Button variant="contained" onClick={sendCart}> Add to Cart </Button>{" "}
        </div>{" "}
      </div>
    </div>
  );
};
export default ProductDetails;
