import React from 'react';

import GithubIcon from '../../svg/github';
import FacebookIcon from '../../svg/facebook';
import LinkedInIcon from '../../svg/linkedin';
import EmailIcon from '../../svg/email';
import InstagramIcon from '../../svg/instagram';

const Footer = () => (
  <footer id="contact" className="container mx-auto px-3 mb-8 text-gray-800">
    <div className="flex justify-center pt-1 md:pt-6">
      <div className="socials flex justify-center">
        <a
          className="icon-anchor-link"
          href="https://www.linkedin.com/in/slaveatanasov"
          alt="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
        </a>
        <a
          className="icon-anchor-link"
          href="https://github.com/slaveatanasov"
          alt="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
        </a>
        <a
          className="icon-anchor-link"
          href="https://www.facebook.com/slaveatanasov"
          alt="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
        </a>
        <a
          className="icon-anchor-link"
          href="https://www.instagram.com/slaveatan"
          alt="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
        </a>
        <a
          className="icon-anchor-link"
          href="mailto:slaveatanasovmusic@gmail.com"
          alt="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
        </a>
      </div>
    </div>
    <div className="flex justify-center">
      <p>Copyright © 2020 Slave Atanasov. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
