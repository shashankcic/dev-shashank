import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Scroll = ({ children }) => (
  <div className="scroll">
    {children}
  </div>
);

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scroll;