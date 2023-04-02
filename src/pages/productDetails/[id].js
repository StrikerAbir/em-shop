import { addToCart } from "@/redux/actionCreators/productAciton";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  const { id } = router.query;
  const [details, setDetails] = useState({});
    // console.log(details);
   const dispatch=useDispatch()
  useEffect(() => {
    fetch(`http://localhost:1000/productDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
    if (currentUser.length) {
      const {
        image,
        title,
        location,
        resale_price,
        original_price,
        years_of_use,
        product_condition,
        post_time,
        seller_name,
        seller_phone,
        seller_email,
        description,
      } = details;
    return (
      <div>
        <div>
          <div className="mt-16 mb-10">
            <section>
              <div className="text-center mb-10">
                <p className="text-2xl font-bold text-primary">
                  Product Details
                </p>
                <h2 className="text-5xl font-semibold">{title} </h2>
              </div>
              <div>
                <div className="card lg:card-side bg-base-100 mx-3 rounded-none">
                  <img
                    className="lg:w-1/2 border-r-4 border-warning"
                    src={image}
                    alt=""
                  />

                  <div className="flex justify-center items-center lg:w-1/2">
                    <div className="card-body">
                      <h2 className="card-title">Title: {title}</h2>
                      <div>
                        <p>
                          <span className="font-bold">Description: </span>
                          {description}
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-2">
                          <span className="font-bold">Location:</span>{" "}
                          {location}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Resale price:</span> $
                          {resale_price}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Original price:</span> $
                          {original_price}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Years of use:</span>{" "}
                          {years_of_use}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Product condition:</span>{" "}
                          {product_condition}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Post time:</span>{" "}
                          {post_time}
                        </p>
                        <div>
                          <p>
                            <span className="font-bold">Seller name: </span>{" "}
                            {seller_name}
                          </p>
                        </div>

                        <p className="mb-2">
                          <span className="font-bold">Seller phone:</span>{" "}
                          {seller_phone}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Seller email:</span>{" "}
                          {seller_email}
                        </p>
                        <div className="my-4">
                          <button
                            className="btn btn-primary"
                          onClick={()=>dispatch(addToCart(details))}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        
      </div>
    );
    } else {
        
        router.push('/login')
    }
};

export default ProductDetail;
