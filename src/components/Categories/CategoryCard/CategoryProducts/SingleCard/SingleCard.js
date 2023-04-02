import Link from "next/link";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useSelector } from "react-redux";


const SingleCard = ({ product }) => {
  const {currentUser} = useSelector(state=>state.user);
  const { image, title, location, resale_price,product_condition,_id } = product;
  return (
    <div className="card card-compact  bg-base-100 rounded-lg shadow-xl">
      <img
        className="lg:w-[490px] lg:h-[490px] border-4 border-warning"
        src={image}
        alt=""
      />

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{title}</h2>
          <div>
            <p className="font-semibold">Resale Price: ${resale_price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Location: {location}</p>
          </div>
          <div>
            <p className="font-semibold">Condition: {product_condition}</p>
          </div>
        </div>
        <div className="card-actions">
          {currentUser.length ? (
            <Link
              href={`/productDetails/${_id}`}
              className="btn bg-primary hover:bg-primary hover:bg-opacity-70 text-neutral border-none rounded-sm w-full"
            >
              Details
            </Link>
          ) : (
            <Link
              href={`/login`}
              className="btn bg-primary hover:bg-primary hover:bg-opacity-70 text-neutral border-none rounded-sm w-full"
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
