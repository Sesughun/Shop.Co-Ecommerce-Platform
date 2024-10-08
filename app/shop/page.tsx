"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Filters from "./Filters";
import Product from "../Product";
import Pagination from "./pagination";

interface Props {
  params: {
    id: number;
  };
}
const Shop = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    setLoading(false);
  }, []);
  function handlePageChange(page: number) {
    setCurrentPage(page);
  }
  if (loading) {
    return (
      <>
        <div className="spinner-border"></div>
        <span>Loading</span>
      </>
    );
  }
  // const filteredProducts =
  //   selectedCategory === "All"
  //     ? product
  //     : product.filter((product) => product.category === selectedCategory);
  return (
    <div>
      <h2 className="ml-4">Shop</h2>
      <div className="flex">
        <div>
          <Filters />
        </div>

        <div className="flex flex-wrap mr-0 ">
          {product.map(({ id, title, image, price }) => (
            <div key={id} className="ml-3 mb-3">
              <Product id={id} image={image} title={title} price={price} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        productNumber={product.length}
        pageSize={8}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Shop;
