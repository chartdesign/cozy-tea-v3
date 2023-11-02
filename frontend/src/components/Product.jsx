import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className='my-3 p-3 rounded-lg bg-white shadow-lg flex flex-col items-start'>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className='w-full rounded-t-lg'
        />
      </Link>

      <div className='p-3 flex flex-col justify-between flex-grow'>
        <Link to={`/product/${product._id}`} className='no-underline'>
          <div className='text-lg font-bold text-black'>{product.name}</div>
        </Link>

        <div className='flex mt-2'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

        <div className='mt-2 text-xl font-semibold'>${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
