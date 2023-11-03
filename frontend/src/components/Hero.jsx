import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <section className='overflow-hidden w-full max-h-[525px] relative text-center'>
      <div className='flex items-center lg:max-w-[600px] backdrop-opacity-40 backdrop-invert bg-white/60 absolute md:w-2/5 text-center md:top-0 sm:right-0  sm:left-0 bottom-0 p-8'>
        <div className='flex flex-col gap-4'>
          <p className='text-md uppercase text-yellow-900 mb-4 font-medium'>
            Sip A World Of Tranquility
          </p>
          <h1 className='text-2xl md:text-4xl'>Tea For Every Moment</h1>
          <p className='font-light text-sm'>
            Our ingredients are thoughtfully sourced and hand-blended to
            perfection for unique teas that bring European café culture to your
            everyday moments.
          </p>
          <div className='hero-buttons'>
            <Link to='/'>
              <button className='bg-cozy-purple text-white text-sm p-2 rounded-3xl border border-cozy-purple hover:bg-white hover:text-cozy-purple cursor-pointer'>
                SHOP ALL TEA
              </button>
            </Link>
          </div>
        </div>
      </div>

      <img
        src='https://images.pexels.com/photos/1251083/pexels-photo-1251083.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt=''
      />
    </section>
  );
};

export default Hero;
