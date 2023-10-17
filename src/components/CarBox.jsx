import React, { useState } from "react";
import { useGlobalContext } from "../context/AppContext";

const CarBox = (cart) => {
  const {addToCart , removeFromCart  } = useGlobalContext();
  const { id ,img_url, name, price } = cart;

  const [count , setCount] = useState(0);

  

  const handleAdd = ()=>{
    addToCart(cart);
    setCount((prev)=> prev + 1);
  }

  const handleRemove = (id)=>{
    removeFromCart(id);
    setCount((prev)=>{
      console.log(prev);
      if(prev > 0){
       return prev - 1;
      }

      return prev  = 0;
    });
  }

  return (
    <article className="car-box">
      <div className="car-img">
        <img src={img_url} alt="" />
        <div className="meta-info">
          <h2>{name}</h2>
          <h2>{price}</h2>
        </div>
      </div>

      <div className="price">
        <button className="btn" onClick={handleAdd}>+</button>
        <p>{count}</p>
        <button className="btn" onClick={()=> handleRemove(id)}>-</button>
      </div>
    </article>
  );
};

export default CarBox;
