import React from 'react';
import { Container } from './styles';

// CUSTOM IMPORTS
import history from '~/services/history';
import Button from '~/components/Button';

export default function SignIn() {
  function toSignUp() {
    history.push('/signUp');
  }

  return (
    <Container>
      <h1>Sign In</h1>
      <Button onClick={toSignUp}>Go to Sign Up</Button>
    </Container>
  );
}
