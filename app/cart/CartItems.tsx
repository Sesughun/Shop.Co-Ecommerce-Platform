"use client";
import React from "react";
import cartStore from "../store/cart";
import Counter from "../shop/[id]/Counter";
import CloseButton from "./CloseButton";

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
  qty?: number;
}

const CartItems = () => {
  const cart = cartStore((state: any) => state.cart);
  const amounts = cartStore((state: any) => state.amount);

  return (
    <div className="pulse">
      <div className=" p-2 text-slate-950 divide-y">
        {cart.map((item: Product) => (
          <div className="hover:shadow-lg" key={item.id}>
            <div className="p-2 flex justify-between">
              <div className="flex gap-2">
                <div className="border-1 border-slate-200 flex-wrap p-2 rounded-3xl">
                  <img
                    alt={item.title}
                    src={item.image}
                    style={{ maxWidth: "25px", maxHeight: "25px" }}
                  />
                </div>
                <div className="mt-1 flex-shrink-1 w-3/4">
                  <span className="ellipsis">{item.title}</span>
                </div>
              </div>
              {/* <div
                style={{
                  border: "solid #e2e8f0",

                  borderRadius: "15px",
                  alignContent: "center",
                }}
                className="bg-slate-200 mt-0"
              >
                <Counter />
              </div> */}
              <div className="mt-2">
                <b>${item.price}</b>
                <span>({item.qty})</span>
                {/* <span>
                  <CloseButton key={item.id} />
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
