"use client";

import { useState, useEffect } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";
import AddToCart from "./AddToCart";

interface Props {
  params: { id: number };
}
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
const ProductDetailPage = ({ params: { id } }: Props) => {
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  if (!product) {
    return <div className="spinner-border"></div>;
  }
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div
      className="flex p-2 m-4"
      style={{ border: "solid gray", borderRadius: "15px" }}
    >
      <div>
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxWidth: "200px",
            maxHeight: "300px",
            backgroundColor: "#F2F0F1",
          }}
        />
      </div>
      <div style={{ padding: "2rem" }}>
        <h1>{product.title}</h1>
        <div className="flex">
          <Rating
            readOnly
            style={{ maxWidth: 250 }}
            itemStyles={myStyles}
            value={product.rating.rate}
          />
          <span style={{ padding: "1rem", fontSize: "1.5rem" }}>
            <b>{product.rating.rate}/5</b>
          </span>
        </div>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <hr></hr>
        <div className="flex">
          <div style={{ width: "30%", margin: "5px" }}>
            <Counter />
          </div>
          <div style={{ width: "70%", margin: "5px" }}>
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
