import React from 'react';

import GithubIcon from '../../svg/github';
import LinkedInIcon from '../../svg/linkedin';
import EmailIcon from '../../svg/email';

const Footer = () => (
  <footer id="contact" className="container mx-auto px-3 mb-8 text-gray-800">
    <p className="text-xl font-light leading-relaxed text-center">Let&apos;s get in touch!</p>
    <div className="flex justify-center">
      <div className="socials flex justify-center">
        <ul className="flex justify-between">
          <li>
            <a
              className="icon-anchor-link"
              href="https://www.linkedin.com/in/slaveatanasov"
              alt="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon classes="social-button w-8 lg:w-10 mx-2" />
            </a>
          </li>
          <li>
            <a
              className="icon-anchor-link"
              href="https://github.com/slaveatanasov"
              alt="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon classes="social-button w-8 lg:w-10 mx-2" />
            </a>
          </li>
          <li>
            <a
              className="icon-anchor-link"
              href="mailto:slaveatan@gmail.com"
              alt="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon classes="social-button w-8 lg:w-10 mx-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center">
      <p className="text-sm md:text-base">Copyright © 2024 Slave Atanasov. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
