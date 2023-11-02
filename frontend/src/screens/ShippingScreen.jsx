import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../slices/cartSlice";
import { FaArrowRight } from "react-icons/fa"; // Importing icons

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 className='text-2xl font-bold mb-4'>Shipping</h1>
      <form onSubmit={submitHandler}>
        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-sm font-medium text-gray-700'
          >
            Address
          </label>
          <input
            type='text'
            id='address'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='city'
            className='block text-sm font-medium text-gray-700'
          >
            City
          </label>
          <input
            type='text'
            id='city'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='postalCode'
            className='block text-sm font-medium text-gray-700'
          >
            Postal Code
          </label>
          <input
            type='text'
            id='postalCode'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='country'
            className='block text-sm font-medium text-gray-700'
          >
            Country
          </label>
          <input
            type='text'
            id='country'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded-md flex items-center'
        >
          Continue <FaArrowRight className='ml-2' />
        </button>
      </form>
    </FormContainer>
  );
};

export default ShippingScreen;
