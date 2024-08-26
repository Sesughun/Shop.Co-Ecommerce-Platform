"use client";
import React from "react";
import cartStore from "@/app/store/cart";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CartItem {
  product: Product;
}
const AddToCart = ({ handleClick }: { handleClick: any }) => {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        padding: "1.25rem",
        borderRadius: "12px",
      }}
      onClick={handleClick}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
