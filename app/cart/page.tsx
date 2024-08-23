"use client";
import React from "react";
import CartItems from "./CartItems";
import Apply from "./Apply";
import Checkout from "./Checkout";
import cartStore from "../store/cart";
const Cart = () => {
  const subtotal = cartStore((state: any) => state.subtotal);
  const discount = cartStore((state: any) => state.discount);
  const deliveryfee = cartStore((state: any) => state.deliveryfee);
  const total = cartStore((state: any) => state.total);
  return (
    <div>
      <h3 className="ml-5 mb-0">CART</h3>
      <div
        className="p-1 mx-4"
        style={{ border: " 2px solid gray", borderRadius: "10px" }}
      >
        <CartItems />
      </div>
      <div
        className="p-3 mx-4 my-2"
        style={{ border: " 2px solid gray", borderRadius: "10px" }}
      >
        <h4>Order Summary</h4>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            <b>${subtotal}</b>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Discount(-20%)</span>
          <span>
            <b>${discount}</b>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>
            <b>${deliveryfee}</b>
          </span>
        </div>
        <hr></hr>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-2xl">
            <b>${total}</b>
          </span>
        </div>
        <div>
          <input
            placeholder="Add promo code"
            style={{ border: "1.5px solid black", borderRadius: "12px" }}
            className="p-2 my-2 mr-5"
          />
          <Apply />
        </div>
        <div>
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
