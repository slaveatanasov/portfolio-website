import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head'
import Footer from './Footer';
import Header from './Header';
import '../../css/layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
