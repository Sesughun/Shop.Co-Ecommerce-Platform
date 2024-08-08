"use client";
import React, { Suspense, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Filters from "./Filters";

interface Props {
  params: {
    id: number;
  };
}

const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div>
      <h2 className="ml-4">Shop</h2>
      <div className="flex">
        <div>
          <Filters />
        </div>

        <div className="flex spacings" style={{ margin: "17px" }}>
          <Suspense fallback="Loading...">
            {product.map(({ id, title, image, price }) => (
              <Link key={id} href={`shop/${id}`}>
                <div
                  className="card"
                  id="card-design"
                  style={{ width: "250px", height: "400px" }}
                  key={id}
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#F2F0F1" }}
                  >
                    <img
                      src={image}
                      alt={title}
                      style={{ width: "240px", height: "300px", zIndex: "1" }}
                    ></img>
                  </div>

                  <div id="card-body-design" className="card-footer">
                    <b>{title}</b>
                    <br />${price}
                  </div>
                </div>
              </Link>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Shop;
