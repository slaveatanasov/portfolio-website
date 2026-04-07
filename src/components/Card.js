import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-xl border border-solid border-gray-300 ${className}`}
  >
    {children}
  </div>
);

Card.defaultProps = {
  className: ''
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Card;
