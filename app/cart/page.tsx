import React from "react";
import CartItems from "./CartItems";
import Apply from "./Apply";
import Checkout from "./Checkout";

const Cart = () => {
  return (
    <div>
      <h3 className="ml-5 ">CART</h3>
      <div
        className="p-1 m-4"
        style={{ border: " 2px solid gray", borderRadius: "10px" }}
      >
        <CartItems />
      </div>
      <div
        className="p-3 mx-4"
        style={{ border: " 2px solid gray", borderRadius: "10px" }}
      >
        <h4>Order Summary</h4>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            <b>$500</b>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Discount(-20%)</span>
          <span>
            <b>$200</b>
          </span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>
            <b>$300</b>
          </span>
        </div>
        <hr></hr>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-2xl">
            <b>$500</b>
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
