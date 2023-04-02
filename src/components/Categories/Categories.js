
import Loading from "../Shared/Loading";
import CategoryCard from "./CategoryCard/CategoryCard";

import { useSelector } from "react-redux";

const Categories = () => {
  const { categories } = useSelector((state) => state.products);
  

  return (
    <div className="pt-16 pb-10 ">
      <div className="text-center">
        <p className="text-2xl font-bold text-primary">Categories</p>
        <h2 className="text-5xl font-semibold"> Dive Into Goods</h2>
        <p className="py-5">
          There are so many different kinds of furniture and not to mention the
          different categories too, <br />
          that it can be difficult for someone who wants to choose their own
          needed furniture.
        </p>
      </div>
      {categories ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6 mt-10 mx-2"
        >
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Categories;
