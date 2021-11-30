import React from 'react';
import { useForm, Controller } from 'react-hook-form';

// CUSTOM IMPORTS
import { Container, QuestionContainer, ButtonsContainer } from './styles';
import { Typography, InputBox, Button } from '../../../components/atoms';

const default_value = { id: 1, value: 0, label: '0' };

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
];

function Impulsores() {
  // STATES
  const { control, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

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
          Questionário Impulsores{' '}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            defaultValue={default_value}
            control={control}
            name="test"
            render={({ field }) => (
              <>
                <table>
                  <tr>
                    <th>
                      <QuestionContainer>
                        <InputBox {...field} options={options} />
                        <Typography variant="regular">
                          Cada vez que faço algo, exijo de mim a maior perfeição
                          ainda a que atividade demore mais.
                        </Typography>
                      </QuestionContainer>
                    </th>
                  </tr>
                </table>
                <ButtonsContainer>
                  <Button variant="outline">
                    <Typography variant="accentRegular">Voltar</Typography>
                  </Button>
                  <Button variant="solid" type="submit">
                    <Typography variant="whiteRegular">Avançar</Typography>
                  </Button>
                </ButtonsContainer>
              </>
            )}
          />
          {/* <table>
            <tr>
              <th>
                <QuestionContainer>
                  <InputBox
                    options={options}
                    onChange={value => setThrusters1(value)}
                    // value={setThrusters1 ? thrusters1 : 0}
                    name="1"
                  />
                  <Typography variant="regular">
                    Cada vez que faço algo, exijo de mim a maior perfeição ainda
                    a que atividade demore mais.
                  </Typography>
                </QuestionContainer>
              </th>
            </tr>
          </table>
          <ButtonsContainer>
            <Button variant="outline">
              <Typography variant="accentRegular">Voltar</Typography>
            </Button>
            <Button variant="solid" type="submit">
              <Typography variant="whiteRegular">Avançar</Typography>
            </Button>
          </ButtonsContainer> */}
        </form>
      </div>
    </Container>
  );
}

export default Impulsores;
