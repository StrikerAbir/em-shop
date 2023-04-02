const { loadProduct } = require("@/redux/actionCreators/productAciton");

const fetchProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://em-shop-server.vercel.app/products");
    const data = await res.json();
    // console.log(data);
    if (data.length) {
      dispatch(loadProduct(data));
    }
  };
};

export default fetchProductData;
