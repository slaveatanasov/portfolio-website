import React from 'react';

const CleanCard = ({ className, children }) => (
  <div className={`p-3 rounded-lg border border-solid border-gray-200 ${className}`}>{children}</div>
);

export default CleanCard;
