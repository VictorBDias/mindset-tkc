import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, SelectField } from './styles';

const InputBox = ({ options, onChange, ...rest }) => {
  // console.log({ ...rest });
  return (
    <Container style={{ width: 80, marginRight: 20 }}>
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
  placeholder: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: null,
};

export { InputBox };
