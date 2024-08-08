"use client";
import React from "react";
import Link from "next/link";
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
      <div style={{ marginRight: "25px" }}>
        <a
          style={{ textDecoration: "none", color: "inherit", outline: "none" }}
          href="/shop"
        >
          Shop
        </a>
      </div>
      <div style={{ marginRight: "25px" }}>On Sale</div>
      <div style={{ marginRight: "25px" }}>New Arrivals</div>
      <div style={{ marginRight: "25px" }}>Brands</div>
      <div></div>
    </div>
  );
};

export default Header;
