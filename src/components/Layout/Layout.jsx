import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
