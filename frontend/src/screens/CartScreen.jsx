import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='md:w-2/3 p-4'>
        <h1 className='text-2xl mb-4'>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty{" "}
            <Link to='/' className='text-cozy-purple'>
              Go Back
            </Link>
          </div>
        ) : (
          <ul className='list-none p-0'>
            {cartItems.map((item) => (
              <li key={item._id} className='border-b pb-4 mb-4'>
                <div className='flex'>
                  <div className='w-1/6 '>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='rounded max-h-[100px]'
                    />
                  </div>
                  <div className='w-1/4 ml-4'>
                    <Link
                      to={`/product/${item._id}`}
                      className='text-cozy-purple'
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className='w-1/6 ml-4'>${item.price}</div>
                  <div className='w-1/6 ml-4'>
                    <select
                      className='form-select block w-full'
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='w-1/6 ml-4'>
                    <button
                      type='button'
                      className='text-cozy-purple'
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='md:w-1/3 p-4'>
        <div className='border p-4'>
          <ul className='list-none p-0'>
            <li className='mb-4'>
              <h2 className='text-xl'>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </li>
            <li>
              <button
                type='button'
                className={`w-full py-2 bg-cozy-purple text-white rounded ${
                  cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
