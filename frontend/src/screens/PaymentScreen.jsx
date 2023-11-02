import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCreditCard } from "react-icons/fa";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../slices/cartSlice";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='text-2xl font-bold'>Payment Method</h1>
      <form onSubmit={submitHandler} className='mt-4'>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2'>Select Method</label>
          <div className='flex items-center my-2'>
            <input
              type='radio'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked={paymentMethod === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='form-radio h-4 w-4 text-blue-600'
            />
            <label htmlFor='PayPal' className='ml-2 flex items-center'>
              <FaRegCreditCard className='mr-1' />
              PayPal or Credit Card
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Continue
        </button>
      </form>
    </FormContainer>
  );
};

export default PaymentScreen;
