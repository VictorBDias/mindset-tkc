import React from 'react';
import { Container } from './styles';

// CUSTOM IMPORTS
import history from '~/services/history';
import Button from '~/components/Button';

export default function SignUp() {
  function toSignIn() {
    history.push('/');
  }

  return (
    <Container>
      <h1>Sign Up</h1>
      <Button onClick={toSignIn}>Go to Sign In</Button>
    </Container>
  );
}
