import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { useState } from "react";

const Product = ({ product }) => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [qty, setQty] = useState(1);

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='border border-cozy-purple p-2 mx-1 max-w-[220px] min-h-[300px] flex flex-col leading-loose rounded-lg'>
      <Link to={`/product/${product._id}`}>
        <div>
          <img
            className='w-full max-h-[100px] rounded-lg object-cover mx-auto'
            src={product.image}
            alt={product.name}
          />
        </div>
        <p className='font-medium leading-5'>{product.name}</p>
        <div className='flex items-center'>
          <span>
            <Rating
              value={product.rating}
              style={{ display: "inline-block" }}
            />
          </span>
          ({product.numReviews}) <span className='text-sm'>Reviews</span>
        </div>
        <p className='font-light text-xs'>{product.description}</p>

        <p className='card-info'>Price: ${product.price}</p>
      </Link>
    </div>
  );
};

export default Product;
