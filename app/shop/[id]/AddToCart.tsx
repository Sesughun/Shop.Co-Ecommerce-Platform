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
interface Products {
  product: Product;
}
const AddToCart = ({ product }: Products) => {
  const addItem = cartStore((state: any) => state.addItem);
  const handleAddItem = () => {
    addItem(product);
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
      AddToCart
    </button>
  );
};

export default AddToCart;
