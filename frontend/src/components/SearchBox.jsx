import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex'>
      <input
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='p-2 mr-2 ml-5 flex-grow rounded text-black'
      />
      <button
        type='submit'
        className='p-2 mx-2 bg-green-500 text-white rounded flex items-center'
      >
        <FaSearch />
        <span className='ml-1'>Search</span>
      </button>
    </form>
  );
};

export default SearchBox;
