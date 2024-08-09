"use client";
import React from "react";
import Link from "next/link";
interface Product {
  products: [{}];
}
const Header = () => {
  return (
    <div id="header" className="flex">
      <h2 style={{ marginRight: "25px" }}>
        <a
          style={{ textDecoration: "none", color: "inherit", outline: "none" }}
          href="/"
        >
          SHOP.CO
        </a>
      </h2>
      <div className="p-1" style={{ marginRight: "25px" }}>
        <a
          style={{ textDecoration: "none", color: "inherit", outline: "none" }}
          href="/shop"
        >
          Shop
        </a>
      </div>
      <div className="p-1" style={{ marginRight: "25px" }}>
        On Sale
      </div>
      <div className="p-1" style={{ marginRight: "25px" }}>
        New Arrivals
      </div>
      <div className="p-1" style={{ marginRight: "25px" }}>
        Brands
      </div>
      <div>
        <button className="bg-slate-200 p-1 rounded ml-auto">
          <span className="p-0 m-0 text-xl">
            Cart🛒<span className="badge bg-secondary">5</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
