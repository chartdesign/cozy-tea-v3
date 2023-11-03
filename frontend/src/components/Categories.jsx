import { Link } from "react-router-dom";
import React from "react";

const Categories = () => {
  return (
    <section className='bg-gradient-to-b from-cozy-light-tan to-white mt-4 p-4'>
      <div className='max-w-[1080px] m-auto'>
        <h1 className='text-cozy-purple text-lg mb-4 text-center'>
          Shop Our Teas
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          <div className='flex flex-col items-center'>
            <Link to='/shop'>
              <img
                src='/tea_02.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>

            <p className='mt-4 text-cozy-purple'>Green Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/shop'>
              <img
                src='/tea_04.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>
            <p className='mt-4 text-cozy-purple'>Black Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/shop'>
              <img
                src='/tea_06.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>
            <p className='mt-4 text-cozy-purple'>Herbal Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/shop'>
              <img
                src='/tea_08.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>
            <p className='mt-4 text-cozy-purple'>Chai Teas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
