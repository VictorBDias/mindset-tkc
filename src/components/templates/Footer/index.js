import React from 'react';

// CUSTOM IMPORTS
import { Container, Content } from './styles';
import { Typography } from '~/components/atoms';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Typography variant="whiteRegular" style={{ marginRight: 400 }}>
          TKCBusiness ® - 2019
        </Typography>
        <Typography variant="whiteRegular">
          pedro@tkcbusiness.com.br{' '}
        </Typography>
      </Content>
    </Container>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};
