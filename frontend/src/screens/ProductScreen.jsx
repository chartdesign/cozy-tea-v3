import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../slices/productsApiSlice";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { addToCart } from "../slices/cartSlice";
import { FaArrowLeft } from "react-icons/fa";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      alert("Review created successfully");
    } catch (err) {
      alert(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className='flex justify-start ml-4'>
        <Link className=' items-center text-cozy-purple my-3' to='/'>
          <FaArrowLeft className='mr-2' /> Go Back
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title={product.name} description={product.description} />
          <div className='flex flex-wrap md:flex-nowrap'>
            <div className='md:w-1/2 m-auto '>
              <img
                src={product.image}
                alt={product.name}
                className='w-full max-h-[200px] object-cover m-auto ml-4 md:w-3/4'
              />
            </div>
            <div className='md:w-1/4 p-3'>
              <ul className='list-none p-0'>
                <li className='mb-2'>
                  <h3 className='text-lg text-cozy-purple font-semibold'>
                    {product.name}
                  </h3>
                </li>
                <li className='mb-2 text-sm'>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </li>
                <li className='mb-2'>Price: ${product.price}</li>
                <li className='mb-2 text-sm font-light'>
                  Description: {product.description}
                </li>
              </ul>
            </div>

            {/* add to cart div */}
            <div className='md:w-1/4 p-3 m-auto'>
              <div className='border rounded p-3'>
                <ul className='list-none p-0'>
                  <li className='mb-2 flex justify-between'>
                    <span>Price:</span>
                    <strong>${product.price}</strong>
                  </li>
                  <li className='mb-2 flex justify-between'>
                    <span>Status:</span>
                    <span>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </span>
                  </li>
                  {product.countInStock > 0 && (
                    <li className='mb-2 flex justify-between'>
                      <span>Qty</span>
                      <select
                        className='form-select block w-full'
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </li>
                  )}
                  <li className='mb-2'>
                    <button
                      className={`btn ${
                        product.countInStock === 0
                          ? "bg-gray-500"
                          : "bg-cozy-purple"
                      } w-full text-white`}
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className='review mt-6'>
            <div className='md:w-1/2 m-4'>
              <h2 className='text-xl mb-4  font-light'>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ul className='list-none p-0'>
                {product.reviews.map((review) => (
                  <li key={review._id} className='border-b pb-2 mb-2'>
                    <strong className='text-lg'>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p className='text-sm'>
                      {review.createdAt.substring(0, 10)}
                    </p>
                    <p>{review.comment}</p>
                  </li>
                ))}
                <li className=''>
                  <h2 className='text-lg mb-4 font-light'>
                    Write a Customer Review
                  </h2>
                  {loadingProductReview && <Loader />}
                  {userInfo ? (
                    <form onSubmit={submitHandler}>
                      <div className='mb-2'>
                        <label
                          className='block text-sm font-bold mb-2'
                          htmlFor='rating'
                        >
                          Rating
                        </label>
                        <select
                          className='form-select block w-full'
                          required
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </select>
                      </div>
                      <div className='mb-2'>
                        <label
                          className='block text-sm font-bold mb-2'
                          htmlFor='comment'
                        >
                          Comment
                        </label>
                        <textarea
                          className='form-textarea block w-full'
                          rows='3'
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>
                      <button
                        className='bg-cozy-purple text-white py-2 px-4 rounded'
                        disabled={loadingProductReview}
                        type='submit'
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <Message>
                      <Link to='/login'>Please Sign in to Write a review</Link>
                    </Message>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* end reviews */}
        </>
      )}
    </>
  );
};

export default ProductScreen;
