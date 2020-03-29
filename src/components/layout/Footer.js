import React from 'react';

import GithubIcon from '../../svg/github';
import FacebookIcon from '../../svg/facebook';
import LinkedInIcon from '../../svg/linkedin';
import EmailIcon from '../../svg/email';
import InstagramIcon from '../../svg/instagram';

const Footer = () => (
  <footer id="contact" className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <h2 className="text-3xl lg:text-5xl font-semibold text-center">Contact</h2>
    <div className="flex justify-center pt-10 xl:pt-16">
      <div className="socials flex justify-center w-9/12">
        <LinkedInIcon classes="social-button w-10 mx-4 md:mx-6" />
        <GithubIcon classes="social-button w-10 mx-4 md:mx-6" />
        <FacebookIcon classes="social-button w-10 mx-4 md:mx-6" />
        <InstagramIcon classes="social-button w-10 mx-4 md:mx-6" />
        <EmailIcon classes="social-button w-10 mx-4 md:mx-6" />
      </div>
    </div>
  </footer>
);

export default Footer;
