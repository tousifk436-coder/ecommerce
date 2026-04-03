import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { useProduct } from "../context/ProductState";

function ShowProduct({ home = false }) {
 
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
    
  const {product, setProduct} = useProduct()

  const fetchProduct = async () => {
    const response = await fetch(
      `https://ecommerce-58o9.onrender.com/api/v3.2/product/all?page=${page}&perpage=16`,
    );
    const data = await response.json();
    setTotalPage(data.page);
    setProduct(data.product);
    console.log(data.product)
  };

  useEffect(() => {
    fetchProduct();
  }, [page]);

  return (
    <section className="max-w-7xl mx-auto p-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {product.map((elm, i) => {
          return (
            <ProductCard
              key={elm.title + i}
              image={elm.thumbnail}
              title={elm.title}
              price={elm.price}
              rating={elm.rating}
              description={elm.description}
              discountPercentage={elm.discountPercentage}
              id={elm._id}
            />
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-15">
        <button
          className="font-medium bg-red-500 py-2 px-4 rounded-sm text-white hover:bg-white hover:outline-1 hover:outline-red-500 hover:text-red-600"
        >
          See More...
        </button>
      </div>
    </section>
  );
}

export default ShowProduct;
