


import Loading from "@/components/Shared/Loading";
import SingleCard from "./SingleCard/SingleCard";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
    const {catProducts}=useSelector(state=>state.products)
    return (
    <div className="mt-16 mb-10 ">
      <div className="text-center">
              <p className="text-2xl font-bold text-primary">{ catProducts.name } Categories</p>
        <h2 className="text-5xl font-semibold"> Dive Into Goods</h2>
      </div>
      {catProducts ? (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2">
          {catProducts?.products?.map((product) => (
            <SingleCard key={product._id} product={product}></SingleCard>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default CategoryProducts;
