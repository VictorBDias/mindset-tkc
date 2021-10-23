import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ className, children, onClick, variant, ...rest }) {
  return (
    <Container
      type="button"
      variant={variant}
      className={className && className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['regular', 'containeed']),
};

Button.defaultProps = {
  className: null,
  onClick: null,
  variant: 'regular',
};

export { Button };
