import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonChakra } from '@chakra-ui/react';

import { Container } from './styles';

function Button({ children, onClick, variant, size, color, ...rest }) {
  return (
    <Container>
      <ButtonChakra
        style={{ boxShadow: ' 2px 4px 4px #00000030' }}
        variant={variant}
        size={size}
        onClick={onClick}
        colorScheme={color}
        {...rest}
      >
        {children}
      </ButtonChakra>
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['solid', 'ghost', 'outline', 'link']),
  color: PropTypes.oneOf([
    'whiteAlpha',
    'blackAlpha',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
    'linkedin',
    'facebook',
    'messenger',
    'whatsapp',
    'twitter',
    'telegram',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xs']),
};

Button.defaultProps = {
  className: null,
  onClick: null,
  variant: 'solid',
  color: 'orange',
  size: 'md',
};

export { Button };
