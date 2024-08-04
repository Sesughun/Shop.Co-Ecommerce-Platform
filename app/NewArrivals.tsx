"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
interface Props {
  params: {
    id: number;
  };
}
const NewArrivals = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=4")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "25px", fontSize: "50px" }}>
        New Arrivals
      </h1>
      <div className="flex" style={{ justifyContent: "center" }}>
        {product.map(({ id, title, image, price }) => (
          <Link key={id} href={`shop/${id}`}>
            <div
              className="card"
              id="card-design"
              style={{ width: "250px", height: "400px" }}
            >
              <div className="card-body" style={{ backgroundColor: "#F2F0F1" }}>
                <img
                  src={image}
                  alt={title}
                  style={{ width: "240px", height: "300px" }}
                ></img>
              </div>

              <div id="card-body-design" className="card-footer">
                <b>{title}</b>
                <br />${price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
