import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, SelectField } from './styles';

const InputBox = ({ options, defaultValue, ...rest }) => {
  return (
    <Container style={{ width: 80, marginRight: 20 }}>
      <SelectField options={options} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

InputBox.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.object,
};

InputBox.defaultProps = {
  placeholder: null,
  defaultValue: null,
};

export { InputBox };
