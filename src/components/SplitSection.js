import React from 'react';
import PropTypes from 'prop-types';

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }) => (
  <section className="py-10 xl:py-16">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

SplitSection.propTypes = {
  primarySlot: PropTypes.shape({}).isRequired,
  secondarySlot: PropTypes.shape({}).isRequired
};

export default SplitSection;
