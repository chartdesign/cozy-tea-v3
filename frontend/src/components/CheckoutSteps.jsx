import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='flex justify-center mb-4 space-x-8'>
      <div>
        {step1 ? (
          <Link to='/login' className='text-blue-500 hover:underline'>
            <FaCheckCircle className='inline text-green-500 mr-1' /> Sign In
          </Link>
        ) : (
          <span className='text-gray-500'>Sign In</span>
        )}
      </div>

      <div>
        {step2 ? (
          <Link to='/shipping' className='text-blue-500 hover:underline'>
            <FaCheckCircle className='inline text-green-500 mr-1' /> Shipping
          </Link>
        ) : (
          <span className='text-gray-500'>Shipping</span>
        )}
      </div>

      <div>
        {step3 ? (
          <Link to='/payment' className='text-blue-500 hover:underline'>
            <FaCheckCircle className='inline text-green-500 mr-1' /> Payment
          </Link>
        ) : (
          <span className='text-gray-500'>Payment</span>
        )}
      </div>

      <div>
        {step4 ? (
          <Link to='/placeorder' className='text-blue-500 hover:underline'>
            <FaCheckCircle className='inline text-green-500 mr-1' /> Place Order
          </Link>
        ) : (
          <span className='text-gray-500'>Place Order</span>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
