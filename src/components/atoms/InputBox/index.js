import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, SelectField } from './styles';

const InputBox = ({ options, onChange, size }) => {
  return (
    <Container style={{ minWidth: size, marginRight: 20 }}>
      <SelectField
        onChange={onChange}
        options={options}
        defaultValue={options[0]}
      />
    </Container>
  );
};

InputBox.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.number,
};

InputBox.defaultProps = {
  onChange: () => {},
  size: 80,
};

export { InputBox };
