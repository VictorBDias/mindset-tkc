import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children }) {
  return <Container />;
}

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
};
