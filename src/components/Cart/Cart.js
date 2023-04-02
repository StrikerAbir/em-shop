import { removeFromCart } from '@/redux/actionCreators/productAciton';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const { cart } = useSelector(state => state.products)
    const dispatch = useDispatch();
    console.log(cart);
    return (
      <div className="bg-base-200 p-10  ">
        <h3 className="text-3xl my-5 ">My Cart</h3>
        {cart.length === 0 ? (
          <p className="text-3xl my-5 text-center">
            You didt added any items.
          </p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                    <th>Remove</th>
               
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  {cart?.map((booking, index) => (
                    <tr key={booking._id}>
                      <th>{index + 1}</th>
                      <td>{booking.title}</td>
                      <td>{booking.post_time}</td>
                          <td>$ {booking.resale_price}</td>
                          <td>{ booking.quantity}</td>
                      <td>
                        <button
                          onClick={()=>dispatch(removeFromCart(booking))}
                          className="btn btn-sm btn-outline bg-error border-none"
                        >
                          Remove
                        </button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
};

export default Cart;