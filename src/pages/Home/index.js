import React from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

// CUSTOM IMPORTS
import { Formik, Form } from 'formik';
import { Container } from './styles';
import { Typography, Input, Button } from '../../components/atoms';
import YoutubeEmbed from '../../utils/YoutubeEmbed';
import { validateTokenAPI } from './apis';

function Home() {
  const notifySuccess = () => toast.success('Token validado!');
  const notifyError = () => toast.error('Token inválido ou expirado!');
  const history = useHistory();

  const handleSubmmit = async data => {
    try {
      const response = await validateTokenAPI(data.token);
      localStorage.setItem('token', data.token);
      notifySuccess();
      window.setTimeout(() => {
        history.push('/instrucoes');
        window.location.reload();
      }, 1000);
      return response;
    } catch (e) {
      notifyError();
    }
  };

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
            token: '',
          }}
          onSubmit={data => handleSubmmit(data)}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Form style={{ display: 'row' }}>
              <Typography
                variant="title"
                style={{
                  marginTop: '24px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                Insira seu token aqui!{' '}
              </Typography>
              <Input type="token" name="token" />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Button variant="solid" type="submit">
                  <Typography variant="whiteRegular">Avançar</Typography>
                </Button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </Container>
  );
}

export default Home;
