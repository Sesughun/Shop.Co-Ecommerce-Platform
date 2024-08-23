import React from "react";
import Link from "next/link";
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}
const Product = ({ id, image, title, price }: Product) => {
  return (
    <div>
      <Link key={id} href={`shop/${id}`}>
        <div
          className="card"
          id="card-design"
          style={{ width: "250px" }}
          key={id}
        >
          <div className="card-body ">
            <img
              src={image}
              alt={title}
              style={{ width: "240px", height: "270px" }}
            ></img>
          </div>

          <div id="card-body-design" className="card-footer">
            <div className="truncate">{title}</div>
            <br />
            <b>${price}</b>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
