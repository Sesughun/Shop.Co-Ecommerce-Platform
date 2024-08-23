"use client";

import { useState, useEffect } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";
import AddToCart from "../../AddToCart";
import cartStore from "@/app/store/cart";

interface Props {
  params: { id: number };
}
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
const ProductDetailPage = ({ params: { id } }: Props) => {
  const [product, setProduct] = useState<Product | null>();
  const [quantity, setQuantity] = useState<number>(0);

  const addItem = cartStore((state: any) => state.addItem);
  const handleAddItem = () => {
    addItem({...product, quantity: quantity});
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  if (!product) {
    return <div className="spinner-border"></div>;
  }
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  return (
    <div
      className=" shadow-2xl flex divide-x divide-slate-300 p-2 m-4"
      style={{ border: "solid gray", borderRadius: "15px" }}
    >
      <div>
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxWidth: "200px",
            maxHeight: "300px",
          }}
          className="pr-3"
        />
      </div>
      <div className="p-4">
        <h1>{product.title}</h1>
        <div className="flex">
          <Rating
            readOnly
            style={{ maxWidth: 150 }}
            itemStyles={myStyles}
            value={product.rating.rate}
          />
          <span style={{ padding: ".5rem", fontSize: "1rem" }}>
            <b>{product.rating.rate}/5</b>
          </span>
        </div>
        <h3>
          <span className="align-super text-sm">$</span>
          {product.price}
        </h3>
        <p className="break-words">{product.description}</p>
        <hr></hr>
        <div className="flex">
          <div style={{ width: "30%", margin: "5px" }}>
            <Counter onChange={(e:any) => setQuantity(e)} />
          </div>
          <div style={{ width: "70%", margin: "5px" }}>
            <AddToCart handleClick={handleAddItem}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
