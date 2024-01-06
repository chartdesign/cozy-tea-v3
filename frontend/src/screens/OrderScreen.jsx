import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";
import { FaTimes, FaCheck } from "react-icons/fa";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  // TESTING ONLY! REMOVE BEFORE PRODUCTION
  // async function onApproveTest() {
  //   await payOrder({ orderId, details: { payer: {} } });
  //   refetch();

  //   toast.success("Order is paid");
  // }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message type='error'>{error.data.message}</Message>
  ) : (
    <div className='container mx-auto mt-6'>
      <h1 className='text-2xl font-bold mb-4'>Order {order._id}</h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full lg:w-2/3 px-4'>
          <div className='bg-white p-4 mb-4'>
            <h2 className='text-xl font-bold mb-2'>Shipping</h2>
            <p>
              <strong>Name: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>{" "}
              <a
                href={`mailto:${order.user.email}`}
                className='text-cozy-purple'
              >
                {order.user.email}
              </a>
            </p>
            <p>
              <strong>Address:</strong>
              {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message type='success'>Delivered on {order.deliveredAt}</Message>
            ) : (
              <Message type='error'>Not Delivered</Message>
            )}
          </div>
          {/* ... similar changes for Payment Method and Order Items sections */}

          {/* Payment Method */}
          <div className='p-4 bg-gray-100 rounded-md mb-4'>
            <h2 className='text-2xl font-bold'>Payment Method</h2>
            <p className='mt-2'>
              <strong className='font-semibold'>Method: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <div className='mt-2 p-2 bg-green-200 rounded-md inline-flex items-center'>
                <FaCheck className='text-green-500 mr-2' />
                Paid on {order.paidAt}
              </div>
            ) : (
              <div className='mt-2 p-2 bg-red-200 rounded-md inline-flex items-center'>
                <FaTimes className='text-red-500 mr-2' />
                Not Paid
              </div>
            )}
          </div>

          {/* Order Items */}
          <div className='p-4 bg-gray-100 rounded-md'>
            <h2 className='text-2xl font-bold'>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <div className='mt-2'>Order is empty</div>
            ) : (
              <div className='mt-2'>
                {order.orderItems.map((item, index) => (
                  <div
                    key={index}
                    className='p-4 bg-white rounded-md mb-2 flex'
                  >
                    <div className='w-1/12'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-full rounded-md'
                      />
                    </div>
                    <div className='w-5/12 ml-4'>
                      <Link
                        to={`/product/${item.product}`}
                        className='text-cozy-purple'
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div className='w-6/12 text-right'>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='w-full lg:w-1/3 px-4'>
          <div className='bg-white p-4'>
            <h2 className='text-xl font-bold mb-2'>Order Summary</h2>
            {/* ... rest of the summary */}
            <div>
              {/* Order Summary */}
              <div className='p-4 bg-gray-100 rounded-md mb-4'>
                <h2 className='text-2xl font-bold'>Order Summary</h2>
              </div>

              {/* Items Price */}
              <div className='p-4 bg-white rounded-md mb-2 flex justify-between'>
                <div>Items</div>
                <div>${order.itemsPrice}</div>
              </div>

              {/* Shipping Price */}
              <div className='p-4 bg-white rounded-md mb-2 flex justify-between'>
                <div>Shipping</div>
                <div>${order.shippingPrice}</div>
              </div>

              {/* Tax Price */}
              <div className='p-4 bg-white rounded-md mb-2 flex justify-between'>
                <div>Tax</div>
                <div>${order.taxPrice}</div>
              </div>

              {/* Total Price */}
              <div className='p-4 bg-white rounded-md mb-2 flex justify-between'>
                <div>Total</div>
                <div>${order.totalPrice}</div>
              </div>
            </div>
            {!order.isPaid && (
              <div className='mt-4'>
                {loadingPay && <Loader />}
                {isPending ? (
                  <Loader />
                ) : (
                  <div>
                    {/* THIS BUTTON IS FOR TESTING! REMOVE BEFORE PRODUCTION! */}
                    {/* <button
                      style={{ marginBottom: "10px" }}
                      onClick={onApproveTest}
                      className='btn btn-block bg-green-400 text-white'
                    >
                      Test Pay Order
                    </button> */}

                    {/* PayPal buttons */}
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                    />
                  </div>
                )}
              </div>
            )}

            {/* ... rest of the code remains the same */}
            {loadingDeliver && <Loader />}

            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <div>
                  <button
                    type='button'
                    className='btn btn-block'
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
