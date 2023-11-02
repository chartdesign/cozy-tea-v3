import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
import { FaMoneyBillWave } from "react-icons/fa";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/3 p-4'>
          <div className='mb-4 p-4 border border-gray-300 rounded'>
            <h2 className='text-lg font-bold'>Shipping</h2>
            <p>
              <strong>Address:</strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </p>
          </div>
          <div className='mb-4 p-4 border border-gray-300 rounded'>
            <h2 className='text-lg font-bold'>Payment Method</h2>
            <p>
              <strong>Method: </strong> <FaMoneyBillWave className='inline' />{" "}
              {cart.paymentMethod}
            </p>
          </div>
          <div className='mb-4 p-4 border border-gray-300 rounded'>
            <h2 className='text-lg font-bold'>Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <ul className='list-inside space-y-4'>
                {cart.cartItems.map((item, index) => (
                  <li
                    key={index}
                    className='flex justify-between items-center border p-2 rounded'
                  >
                    <div className='w-1/12'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='rounded max-w-full'
                      />
                    </div>
                    <div className='w-1/2 pl-4'>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div className='w-1/3 text-right'>
                      {item.qty} x ${item.price} = $
                      {(item.qty * item.price).toFixed(2)}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='md:w-1/3 p-4'>
          <div className='p-4 border border-gray-300 rounded'>
            <h2 className='text-lg font-bold mb-4'>Order Summary</h2>
            <div className='flex justify-between mb-2'>
              <span>Items</span>
              <span>${cart.itemsPrice}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Shipping</span>
              <span>${cart.shippingPrice}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Tax</span>
              <span>${cart.taxPrice}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Total</span>
              <span>${cart.totalPrice}</span>
            </div>
            {error && <Message variant='danger'>{error.data.message}</Message>}
            <button
              onClick={placeOrderHandler}
              disabled={cart.cartItems.length === 0}
              className='w-full bg-blue-500 text-white p-2 rounded mt-4'
            >
              Place Order
            </button>
            {isLoading && <Loader />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
