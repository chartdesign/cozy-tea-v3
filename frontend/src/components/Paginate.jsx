import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div className='flex justify-center items-center mt-4'>
        {/* Previous Page Icon */}
        {page > 1 && (
          <Link
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${page - 1}`
                  : `/page/${page - 1}`
                : `/admin/productlist/${page - 1}`
            }
            className='px-3 py-2 border rounded-md mr-2'
          >
            <FiChevronLeft />
          </Link>
        )}
        {/* Page Numbers */}
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            className={`px-3 py-2 border rounded-md mr-2 ${
              x + 1 === page ? "bg-cozy-purple text-white" : ""
            }`}
          >
            {x + 1}
          </Link>
        ))}
        {/* Next Page Icon */}
        {page < pages && (
          <Link
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${page + 1}`
                  : `/page/${page + 1}`
                : `/admin/productlist/${page + 1}`
            }
            className='px-3 py-2 border rounded-md'
          >
            <FiChevronRight />
          </Link>
        )}
      </div>
    )
  );
};

export default Paginate;
