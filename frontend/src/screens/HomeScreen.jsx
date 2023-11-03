import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Hero from "../components/Hero";
import Meta from "../components/Meta";
import Categories from "../components/Categories";
import Benefits from "../components/Benefits";

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
          <Hero />
        </>
      ) : (
        <Link
          to='/'
          className='inline-block mb-4 px-4 py-2 text-white bg-cozy-purple hover:bg-gray-400 ml-4 rounded-lg'
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
          <Benefits />
          <Categories />
          <div className='bg-gradient-to-t from-cozy-light-tan to-white mt-4 p-4'>
            <div className='max-w-[1080px] m-auto'>
              <h1 className='text-xl font-bold mb-4 text-cozy-purple'>
                Your Tea Collection
              </h1>
              <div className='grid grid-cols-2 md:grid-cols-4'>
                {data.products.map((product) => (
                  <div key={product._id} className=''>
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
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
