import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="navigation-menu sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="mr-3">
          <p className="logo-sa">SLAVE_ATANASOV</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 sm:mt-0 nav-links">
        <AnchorLink className="" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="" href="#qualifications">
          Qualifications
        </AnchorLink>
        <AnchorLink className="" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink className="" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block" />
    </div>
  </header>
);

export default Header;
