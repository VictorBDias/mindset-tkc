import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ className, children, onClick }) {
  return (
    <Container
      type="button"
      className={className && className}
      onClick={onClick && onClick}
    >
      {children}
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  onClick: null,
};
