import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleCard from "../Categories/CategoryCard/CategoryProducts/SingleCard/SingleCard";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://em-shop-server.vercel.app/customers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="bg-base-200 p-10  ">
        <h3 className="text-3xl my-5 ">Dashboard</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-10 border border-black bg-primary rounded">
            <h1 className="text-2xl">Total Products</h1>
            <p className="text-xl">{products.length}</p>
          </div>
          <div className="text-center p-10 border border-black bg-primary rounded">
            <h1 className="text-2xl">Total User</h1>
            <p className="text-xl">{data.length}</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-primary">All Products</p>
        </div>
        {products ? (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
            {products.map((product) => (
              <SingleCard key={product._id} product={product}></SingleCard>
            ))}
          </div>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
