import React from "react";

const FormContainer = ({ children }) => {
  return (
    <div className='container mx-auto mt-5'>
      <div className='flex justify-center'>
        <div className='w-full md:w-1/2 card p-5'>{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
