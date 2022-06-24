import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Button, InputBox, Typography } from '~/components/atoms';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Motivadores() {
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('motivadores').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'motivadores',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace, questions]);

  const handleFormatAnswerData = data => {
    const choicesArray = [];

    data.motivadores.map(value => {
      if (value.dependencies[0]) {
        value.dependencies.map(dependency => {
          if (dependency) {
            choicesArray.push({
              question_id: dependency.question_id,
              choice_id: dependency.choice_id,
              dependency_id: dependency.id,
            });
          }
        });
      }
      if (!value.dependencies[0]) {
        value.choices.map(choice => {
          choicesArray.push({
            question_id: choice.dependencies[0].question_id,
            choice_id: choice.dependencies[0].choice_id,
            dependency_id: choice.dependencies[0].id,
          });
        });
      }
    });

    answerQuestionsAPI({
      userId: '0d7d26f1-911f-4f1a-8c02-bba9e7b79900',
      choices: choicesArray,
    });
  };

  const renderField = (item, index) => {
    const { choices } = item;
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.sentence}
        </Typography>
        <table>
          <tr key={choices[0].id}>
            <th>
              <QuestionContainer key={choices[0].id}>
                <Controller
                  render={({ field }) => (
                    <InputBox options={choices[0].dependencies} {...field} />
                  )}
                  name={`motivadores.${index}.dependencies.0`}
                  control={control}
                />
                <Typography variant="regular">{choices[0].sentence}</Typography>
              </QuestionContainer>
            </th>
          </tr>
          <tr key={choices[1].id}>
            <th>
              <QuestionContainer key={choices[1].id}>
                <Controller
                  render={({ field }) => (
                    <InputBox options={choices[1].dependencies} {...field} />
                  )}
                  name={`motivadores.${index}.dependencies.1`}
                  control={control}
                />
                <Typography variant="regular">{choices[1].sentence}</Typography>
              </QuestionContainer>
            </th>
          </tr>
        </table>
      </div>
    );
  };

  const onSubmit = data => handleFormatAnswerData(data);

  return (
    <Container>
      <div style={{ display: 'row', width: 900 }}>
        <div>
          <Typography
            variant="title"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              fontWeight: 'bold',
              marginBottom: '24px',
            }}
          >
            Questionário Motivadores{' '}
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Você encontrará abaixo 30 proposições diferentes para ler e avaliar.
            Cada uma delas apresenta duas alternativas possíveis. Ambas são
            CORRETAS e VÁLIDAS.
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Portanto, você deverá optar por aquela que melhor refletir a sua
            realidade interna: aquela que mais parece com aquilo que você faz ou
            costuma fazer ou acredita que faria naquelas circunstâncias.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            1) Selecione 2 ou 3 pontos à alternativa que você escolher como a
            mais significativa, dependendo do grau de sua importância comparada
            com a alternativa menos cotada.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            2) Na outra alternativa, selecione 0 ou 1, dependendo dos pontos que
            você atribuiu à primeira, já que a pontuação das duas deverá somar
            sempre 3 pontos.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Isto não é um teste de conhecimentos. Não há alternativas boas ou
            más, corretas ou incorretas. Insira nos quadradinhos correspondentes
            os pontos que você atribuir.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form className="motivadores-form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => renderField(item, index))}
            <ButtonsContainer>
              {/* <Button size="lg" variant="outline">
                <Typography variant="accentRegular">Voltar</Typography>
              </Button> */}
              <Button size="lg" variant="solid" type="submit">
                <Typography variant="whiteRegular">Avançar</Typography>
              </Button>
            </ButtonsContainer>
          </form>
        </div>
      </div>
    </Container>
  );
}
