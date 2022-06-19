import React from 'react';
import { useHistory } from 'react-router-dom';

// CUSTOM IMPORTS
import { Formik, Form } from 'formik';
import Map from '../../../../assets/map.png';
import { Container, LeftContainer, RightContainer } from './styles';
import { Button, Input, Typography } from '~/components/atoms';
import YoutubeEmbed from '~/utils/YoutubeEmbed';

function Instrucoes() {
  const history = useHistory();
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
            console.log(values);
            history.push('/impulsores');
          }}
        >
          <Form>
            <LeftContainer>
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
              <Input
                type="date"
                name="birth_date"
                placeholder="Insira sua data de nascimento"
                label="Data de nascimento"
              />
              <Input
                type="number"
                name="daily_workload"
                placeholder="Carga diária de trabalho (realizando, em horas)"
                label="Carga diária de trabalho"
              />
              <Input
                type="number"
                name="retirement"
                placeholder="Aposentadoria (com qual idade pretende reduzir a intensidade de trabalho)"
                label="Idade em que pretende se aposentar"
              />
              <table>
                <tr>
                  <th>
                    <Typography
                      variant="title"
                      style={{
                        textAlign: 'center',
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                      }}
                    >
                      Instruções
                    </Typography>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Typography>
                      Leia atentamente o cabeçalho dos questionários antes de
                      iniciar o preenchimento das respostas.
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography>
                      Sua resposta precisa representar a sua opção como se de
                      fato você estivesse nesta situação.
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography>
                      A sua sinceridade é que vai determinar o grau de exatidão
                      do diagnóstico de mindset.
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography>
                      Evite optar por respostas que representariam como você
                      gostaria de se comportar ou que você considera correto
                      nestas situações.
                    </Typography>
                  </td>
                </tr>
              </table>
            </LeftContainer>
            <RightContainer>
              <img
                src={Map}
                alt="logo"
                width="470"
                height="590"
                style={{ marginBottom: 24 }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button variant="solid" type="submit">
                  <Typography variant="whiteRegular">Avançar </Typography>
                </Button>
              </div>
            </RightContainer>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}

export default Instrucoes;
