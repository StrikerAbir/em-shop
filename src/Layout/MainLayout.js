import Footer from '@/components/Shared/Footer';
import NavBar from '@/components/Shared/NavBar';
import React from 'react';

const MainLayout = ({ children}) => {
    return (
      <>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </>
    );
};

export default MainLayout;