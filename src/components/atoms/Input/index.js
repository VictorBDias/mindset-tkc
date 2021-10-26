import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
// import { Input as InputC } from '@chakra-ui/react';
import { Container, InputForm } from './styles';

function Input({ label, placeholder, ...rest }) {
  return (
    <Container>
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{label}</p>
      <InputForm placeholder={placeholder} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {};

export { Input };
