"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./Product";
interface Props {
  params: {
    id: number;
  };
}
const NewArrivals = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=4")
      .then((res) => res.json())
      .then((json) => setProduct(json));
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div id="#new-arrival">
      <h1 style={{ textAlign: "center", marginTop: "25px", fontSize: "50px" }}>
        New Arrivals
      </h1>
      <div
        className="flex flex-wrap gap-2"
        style={{ justifyContent: "center" }}
      >
        {product.map(({ id, title, image, price }) => (
          <Product id={id} image={image} title={title} price={price} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
