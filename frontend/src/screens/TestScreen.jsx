import React from "react";
import {
  useGetProductsQuery,
  useGetProductsByCatgQuery,
} from "../slices/productsApiSlice";
import { useParams, Link } from "react-router-dom";
import Product from "../components/Product";
import Paginate from "../components/Paginate";

const TestScreen = () => {
  const { pageNumber, keyword, category } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    category,
    keyword,
    pageNumber,
  });

  console.log(data);

  return (
    <div>
      TestScreen
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {data.products.map((product) => (
          <div key={product._id} className=''>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestScreen;
