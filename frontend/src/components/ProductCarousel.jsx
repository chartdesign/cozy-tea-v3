import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <div className='relative bg-slate-400 mb-4 overflow-hidden h-[400px] max-w-lg'>
      {products.map((product, index) => (
        <div
          key={product._id}
          className={`absolute top-0 w-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-50" : "opacity-0"
          }`}
        >
          <Link to={`/product/${product._id}`}>
            <img
              src={product.image}
              alt={product.name}
              className='w-full object-cover'
            />
            <div className='absolute bottom-0 text-white p-4 z-10'>
              <h2 className='text-center'>
                {product.name} (${product.price})
              </h2>
            </div>
          </Link>
        </div>
      ))}
      <div
        className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <FiChevronLeft size={32} />
      </div>
      <div
        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <FiChevronRight size={32} />
      </div>
    </div>
  );
};

export default ProductCarousel;
