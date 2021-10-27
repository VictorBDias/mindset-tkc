import React from 'react';

// CUSTOM IMPORTS
import { Formik, Form } from 'formik';
import { Container } from './styles';
import { Typography, Input, Button } from '../../../components/atoms';
import YoutubeEmbed from '../../../utils/YoutubeEmbed';

function Instructions() {
  return (
    <Container>
      <div style={{ display: 'row' }}>
        <Typography
          variant="title"
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            fontWeight: 'bold',
            marginBottom: '24px',
          }}
        >
          Assista ao vídeo
        </Typography>
        <YoutubeEmbed embedId="GqyAyIDXwoc" />
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Input
              type="name"
              name="name"
              placeholder="Insira seu nome"
              label="Nome"
            />

            <Input
              type="email"
              name="email"
              placeholder="Insira seu email"
              label="Email"
            />
            <Button variant="solid" type="submit">
              <Typography variant="whiteRegular">Avançar </Typography>
            </Button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}

export default Instructions;
