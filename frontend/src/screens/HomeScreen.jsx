import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <>
          <ProductCarousel />
          Im The Carousel
        </>
      ) : (
        <Link
          to='/'
          className='inline-block mb-4 px-4 py-2 text-white bg-gray-500 hover:bg-gray-400'
        >
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1 className='text-2xl font-bold mb-4'>Latest Products</h1>
          <div className='flex flex-wrap -mx-4'>
            {data.products.map((product) => (
              <div
                key={product._id}
                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4'
              >
                <Product product={product} />
              </div>
            ))}
          </div>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
