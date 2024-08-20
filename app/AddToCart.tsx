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
const AddToCart = ({ product }: CartItem) => {
  const addItem = cartStore((state: any) => state.addItem);
  const handleAddItem = () => {
    const newItem = product;

    addItem(newItem);
  };
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        padding: "1.25rem",
        borderRadius: "12px",
      }}
      onClick={handleAddItem}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
