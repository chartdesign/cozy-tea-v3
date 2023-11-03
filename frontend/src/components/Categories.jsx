import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Categories = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const handleClick = (e) => {
    e.stopPropagation();
    navigate("/category/Green Tea");
  };

  return (
    <section className='bg-gradient-to-b from-cozy-light-tan to-white mt-4 p-4'>
      <div className='max-w-[1080px] m-auto'>
        <h1 className='text-cozy-purple text-lg mb-4 text-center'>
          Shop Our Teas
        </h1>
        <div
          onClick={() => {
            setKeyword("Green Tea");
            navigate("/category/Green Tea");
          }}
        >
          Green Tea test
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          <div className='flex flex-col items-center'>
            <Link to='/category/Green Tea'>
              <img
                src='/tea_02.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>

            <p className='mt-4 text-cozy-purple'>Green Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/category/Black Tea'>
              <img
                src='/tea_04.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>
            <p className='mt-4 text-cozy-purple'>Black Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/category/Herbal Tea'>
              <img
                src='/tea_06.jpg'
                alt='tea1'
                className='w-[150px] h-[150px] object-cover rounded-2xl shadow-lg shadow-cozy-purple/50 hover:scale-105 transition ease-in-out delay-150 cursor-pointer'
              />
            </Link>
            <p className='mt-4 text-cozy-purple'>Herbal Teas</p>
          </div>
          <div className='flex flex-col items-center'>
            <Link to='/category/Chai Tea'>
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
