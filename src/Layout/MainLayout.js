import Footer from '@/components/Shared/Footer';
import NavBar from '@/components/Shared/NavBar';
import fetchCategoryData from '@/redux/thunk/products/fetchCategory';
import fetchProductData from '@/redux/thunk/products/fetchProducts';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);
  return (
    <>
      <div data-theme={theme ? "dark" : "light"}>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;