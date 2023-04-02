const { loadCatProduct } = require("@/redux/actionCreators/productAciton");

const fetchCatProductData = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://em-shop-server.vercel.app/categoryProduct?id=${id}`
    );
    const data = await res.json();
    // console.log(data);
    if (data) {
      dispatch(loadCatProduct(data));
    }
  };
};
export default fetchCatProductData;
