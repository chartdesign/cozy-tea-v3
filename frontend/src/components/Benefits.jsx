import React from "react";
import { GiBlender, GiEnvelope } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className='max-w-[1080px] grid grid-cols-2 md:grid-cols-4 mt-4 m-auto  divide-x border-gray-300'>
      <div className='flex flex-col p-4 text-center items-center  '>
        <div className='bg-cozy-dark-tan w-1/6 p-1 rounded-lg mb-2'>
          <GiBlender size={20} />
        </div>
        <p className='text-cozy-purple'>Always Hand Blended Fresh</p>
      </div>
      <div className='flex flex-col p-4 text-center items-center '>
        <div className='bg-cozy-dark-tan w-1/6 p-1 rounded-lg mb-2 '>
          <GiEnvelope size={20} />
        </div>
        <p className='text-cozy-purple'>Free Sample With Every Order</p>
      </div>
      <div className='flex flex-col p-4 text-center items-center '>
        <div className='bg-cozy-dark-tan w-1/6 p-1 rounded-lg mb-2'>
          <AiOutlineSafety size={20} />
        </div>
        <p className='text-cozy-purple'>100% Secure Checkout</p>
      </div>
      <div className='flex flex-col p-4 text-center items-center'>
        <div className='bg-cozy-dark-tan w-1/6 p-1 rounded-lg mb-2'>
          <FaShippingFast size={20} />
        </div>
        <p className='text-cozy-purple'>Fast Shipping</p>
      </div>
    </section>
  );
};

export default Benefits;
