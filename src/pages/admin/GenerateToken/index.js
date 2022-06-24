import React, { useState } from 'react';
import toast from 'react-hot-toast';

// CUSTOM IMPORTS
import { Box } from '@chakra-ui/react';
import { createTokenAPI, generateTokenAPI } from './apis';
import { Container } from './styles';
import { Button, Typography } from '~/components/atoms';

export const GenerateTokenPage = () => {
  const notify = () =>
    toast.success('Token copiado para a área de transferência');

  const [token, setToken] = useState('');

  const generateToken = () => {
    generateTokenAPI().then(response => {
      createTokenAPI(response.data);
      setToken(response.data);
    });
  };

  return (
    <Container>
      <div style={{ display: 'row' }}>
        <Button onClick={generateToken} size="lg" style={{ marginBottom: 32 }}>
          GERAR TOKEN
        </Button>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        />
        <div style={{ display: 'flex' }}>
          <Box
            bg="orange"
            w="400px"
            h="80px"
            p={4}
            color="white"
            borderRadius={8}
          >
            <Typography
              variant="whiteTitle"
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {token}{' '}
            </Typography>
          </Box>
          {token && (
            <Button
              style={{ height: 80, marginLeft: 8 }}
              onClick={() => {
                navigator.clipboard.writeText(token);
                notify();
              }}
            >
              Copiar
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};
