import React, { useState, useEffect } from "react";
import skirtData from "./skirt.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Localstorage} from "react";
import "../App.css";

const Fashion = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const [apiData, setApiData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data from the API", error);
    }
  };

  useEffect(() => {
    fetchDataFromApi()
   
  }, []);
  console.log(apiData);

  const filteredSkirts = apiData.products?.filter((skirt) =>
    skirt.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SkirtProduct = (id) => {
    navigate(`/productdetails/${id}`);
  };

const AddCart = (skirt) =>{
  console.log(skirt)
  
}

const SkirtItem = (skirt) =>{
  console.log(SkirtItem)
  Localstorage.setItem("name",JSON.stringify(skirt)  )
}



  return (
    <div>
      <input className="skirtsearch"
        placeholder="Search Skirts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex-container">
        {" "}
        {filteredSkirts?.map((skirt) => {
      
          return(

            <div key={skirt.id}>
            <img onClick={() => SkirtProduct(skirt.id)} className="comerceimg" src={skirt.images[0]} alt={skirt.brand} />{" "}
            <div className="skirtname">{skirt.brand}</div>
            <p>
              $ {skirt.price} <del> $ {skirt.discountedPrice} </del>{" "}
              <span> ({skirt.discountPercentage} % Off) </span>{" "}
            </p>{" "}
             
            <button className="btnskirt" onClick={() => AddCart(skirt) } > Add to cart </button>{" "}
      
          </div>
      
        )})
          }
      </div>
         
    </div>
  )  };  
        
           

export default Fashion;
