import React from "react";
import CartItems from "./CartItems";
import Apply from "./Apply";
import Checkout from "./Checkout";

const Cart = () => {
  return (
    <div>
      <h2>YOUR CART</h2>
      {/* <div className="p-1" style={{ border: " 2px solid gray" }}>
        <CartItems />
      </div>  */}
      <div
        className="p-3 m-4"
        style={{ border: " 2px solid gray", borderRadius: "15px" }}
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
          <span>
            <b>$500</b>
          </span>
        </div>
        <div>
          <input placeholder="Add promo code" />
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
