import Link from "next/link";
import React from "react";

const ShopNow = () => {
  return (
    <div>
      <Link href="/shop" id="shop-now" className="btn btn-secondary">
        Shop Now
      </Link>
    </div>
  );
};

export default ShopNow;
