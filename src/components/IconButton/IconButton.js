import React from 'react';
import propTypes from 'prop-types';
const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);
IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
};
export default IconButton;
