import React from 'react';
import PropTypes from 'prop-types';

const CleanCard = ({ className, children }) => (
  <div className={`p-3 rounded-lg border border-solid border-gray-200 ${className}`}>
    {children}
  </div>
);

CleanCard.defaultProps = {
  className: ''
};

CleanCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default CleanCard;
