import React from 'react';

// CUSTOM IMPORTS
import { Container } from './styles';
import { Typography, Button } from '../../components/atoms';

function Home() {
  return (
    <Container>
      <Typography variant="title">Home</Typography>
      <Button>Button</Button>
    </Container>
  );
}

export default Home;
