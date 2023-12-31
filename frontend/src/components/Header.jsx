import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { resetCart } from "../slices/cartSlice";
import SearchBox from "./SearchBox";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiSolidUpArrow } from "react-icons/bi";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCaretDown,
  AiOutlineClose,
  AiFillDelete,
} from "react-icons/ai";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isUserOpen, setUserOpen] = useState(false);
  const toggleUser = () => {
    setUserOpen(!isUserOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className='bg-white text-black py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className=' text-xl font-bold w-1/2 flex items-center ml-2'>
          <Link to='/'>
            <div>
              <img src='/logo.png' alt='tea cup' className='max-w-[40px]' />
            </div>
          </Link>

          <p className='text-cozy-purple font-normal ml-2'>Cozy Tea Shop</p>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className='lg:hidden'>
          <div className='flex items-center relative'>
            {userInfo ? (
              <>
                <span className='cursor-pointer' onClick={toggleUser}>
                  Hi: {userInfo.name}
                </span>
                <AiOutlineCaretDown />
              </>
            ) : (
              <AiOutlineUser className='mr-4' size={20} />
            )}

            {/* user toggle menu */}
            {isUserOpen && (
              <div className='absolute z-10 translate-y-16  bg-slate-400 rounded-xl'>
                <div onClick={toggleUser}>
                  <Link to='/profile' className='block px-4 py-2'>
                    Profile
                  </Link>
                </div>
                <button
                  onClick={logoutHandler}
                  className='block px-4 py-2 w-full text-left'
                >
                  Logout
                </button>
              </div>
            )}
            <Link to='/cart'>
              <AiOutlineShoppingCart className='mr-4' size={20} />{" "}
            </Link>

            <GiHamburgerMenu
              className='text-bg-gray-700 text-3xl cursor-pointer mr-2'
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu (hidden on larger screens) */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute inset-0 bg-zinc-50 z-50'>
            <div className='lg:hidden grid justify-items-end mt-4 mr-4'>
              <div>
                <AiOutlineCloseCircle
                  className='text-bg-gray-700 text-3xl cursor-pointer '
                  onClick={toggleMobileMenu}
                />
              </div>
            </div>
            <div className='flex flex-col items-center  h-full space-y-4 mt-8'>
              <Link
                to='/'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
              <Link
                to='/cart'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
                onClick={toggleMobileMenu}
              >
                Cart
              </Link>
              <Link
                to='/login'
                className='text-bg-gray-700 text-xl hover:text-gray-400 mt-4'
                onClick={toggleMobileMenu}
              >
                Account
              </Link>
              <div className='flex items-center space-x-4 '>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-700 text-bg-gray-700 px-3 py-1 '
                />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links (hidden on small screens) */}
        <div className='hidden lg:flex items-center'>
          <SearchBox />
          <Link to='/cart' className='flex items-center ml-6'>
            <FaShoppingCart className='mr-2' />
            Cart
            {cartItems.length > 0 && (
              <span className='bg-cozy-purple text-white rounded-full ml-2 px-2'>
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>
          {userInfo ? (
            <>
              <div className='relative ml-6'>
                <button className='flex items-center'>
                  {userInfo.name}
                  <FaUser className='ml-2' />
                </button>

                <div className=' absolute hover:block top-full mt-2 bg-white text-black rounded shadow-lg z-10'>
                  <Link to='/profile' className='block px-4 py-2'>
                    Profile
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className='block px-4 py-2 w-full text-left'
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to='/login' className='flex items-center ml-6 text-sm'>
              <FaUser className='mr-2' />
              Login
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className='relative ml-6'>
              <button className='flex items-center'>Admin</button>
              <div className='absolute top-full mt-2 bg-white text-black rounded shadow-lg'>
                <Link to='/admin/productlist' className='block px-4 py-2'>
                  Products
                </Link>
                <Link to='/admin/orderlist' className='block px-4 py-2'>
                  Orders
                </Link>
                <Link to='/admin/userlist' className='block px-4 py-2'>
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
