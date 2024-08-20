"use client";
import React from "react";
import Link from "next/link";
interface CartItems {
  cartItemsCount: number;
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
      <div className="p-1" style={{ marginRight: "15px" }}>
        <a
          style={{ textDecoration: "none", color: "inherit", outline: "none" }}
          href="/shop"
        >
          Shop
        </a>
      </div>
      <div className="p-1" style={{ marginRight: "15px" }}>
        On Sale
      </div>
      <div className="p-1" style={{ marginRight: "15px" }}>
        New Arrivals
      </div>
      <div className="p-1" style={{ marginRight: "15px" }}>
        Brands
      </div>
      <div className="p-1">
        <Link href="/cart">
          <span className="p-1 m-0">
            Cart<span className="badge bg-secondary">0</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
