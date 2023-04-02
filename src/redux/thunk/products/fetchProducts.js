const { loadProduct} = require("@/redux/actionCreators/productAciton");

const fetchProductData = () => {
    return async(dispatch, getState) => {
        const res = await fetch("http://localhost:1000/products");
        const data = await res.json();
        // console.log(data);
        if (data.length) {
            dispatch(loadProduct(data))
        }
    }
}

export default fetchProductData