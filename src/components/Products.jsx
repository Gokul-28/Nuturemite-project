import React from "react";
// import CardCarousel from "./CardCarousel";
import ProductCardCarousel from "./ProductCardCarousel";

const Products = () => {
  return (
    <div className="h-120" style={{ overflow: "hidden", height: "120vh" }}>

      <div>
        <p className="display-6 text-center text-light bg-dark">New Arrivals</p>
        <ProductCardCarousel />
      </div>
   
      <div>
        <p className="display-6 text-center text-light bg-dark">Special Offers</p>
        <ProductCardCarousel />
       
      </div>
    </div>
  );
};

export default Products;
