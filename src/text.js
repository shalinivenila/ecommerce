import React from "react";
import skirt from './components/skirt.json';


skirt.map((skirtitem) =>{
    return(
        <div>
         <img src={skirtitem.image}></img>   
         <div>{skirtitem.name}</div>
               </div>
             
    )
})