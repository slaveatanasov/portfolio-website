import React from 'react';
import PropTypes from 'prop-types';

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }) => {
  const secondarySlotClasses = reverseOrder
    ? `mt-10 lg:mt-0 w-full lg:w-1/2 order-last lg:order-first`
    : `mt-10 lg:mt-0 w-full lg:w-1/2`;

  return (
    <section className="py-10 xl:py-16">
      <div className="container mx-auto px-16 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">{primarySlot}</div>
        <div className={secondarySlotClasses}>{secondarySlot}</div>
      </div>
    </section>
  );
};

SplitSection.defaultProps = {
  reverseOrder: null
};

SplitSection.propTypes = {
  primarySlot: PropTypes.shape({}).isRequired,
  secondarySlot: PropTypes.shape({}).isRequired,
  reverseOrder: PropTypes.bool
};

export default SplitSection;
