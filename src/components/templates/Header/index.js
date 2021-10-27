import React from 'react';
// import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, Content } from './styles';
import Logo from '../../../assets/defaultIcon.png';
import { Typography } from '~/components/atoms';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" width="55" height="55" />
        <Typography
          variant="whiteTitle"
          style={{ marginLeft: 40, marginRight: 40 }}
        >
          Diagnóstico de Mindset v2.4
        </Typography>
      </Content>
    </Container>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
