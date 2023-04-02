import { loadCategory } from "@/redux/actionCreators/productAciton";


const fetchCategoryData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:1000/categories");
    const data = await res.json();
    // console.log(data);
    if (data.length) {
      dispatch(loadCategory(data));
    }
  };
};
export default fetchCategoryData;
