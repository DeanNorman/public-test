import React from 'react';
import "./layout.css";
import "./fonts.css";
import Navbar from '../components/Nav/NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
            {children}
         <Footer /> 
      </>
   )
};

export default Layout;
