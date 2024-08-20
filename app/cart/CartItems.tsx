"use client";
import React from "react";
import cartStore from "../store/cart";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CartItems = () => {
  const cart = cartStore((state: any) => state.cart);

  return (
    <div className=" p-4 text-slate-950 divide-y" style={{}}>
      {cart.map((item: Product) => (
        <div>
          <div key={item.id} className="p-2 flex justify-between">
            <div className="flex flex-wrap gap-2">
              <div className="border-1 border-slate-200 flex-shrink-0 p-2 rounded-3xl">
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ maxWidth: "25px", maxHeight: "35px" }}
                />
              </div>
              <div className="mt-2 flex-shrink-1">
                <h5 className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.title}
                </h5>
              </div>
            </div>
            <div className="mt-2">
              <b>${item.price}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
