"use client";
import React from "react";
import Link from "next/link";
import cartStore from "./store/cart";
interface CartItems {
  cartItemsCount: number;
}
const Header = () => {
  const count = cartStore((state: any) => state.count);
  return (
    <div id="header" className="flex flex-wrap">
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
            Cart
            <span className=" ml-1 p-1 rounded-lg badge bg-secondary">
              {count}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
