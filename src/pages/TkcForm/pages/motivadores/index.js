import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Button, InputBox, Typography } from '~/components/atoms';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Motivadores() {
  const history = useHistory();
  const { userId } = useParams();
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
      userId,
      choices: choicesArray,
    }).then(() => history.push(`/assertividade/${userId}`));
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
            Question??rio Motivadores{' '}
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Voc?? encontrar?? abaixo 30 proposi????es diferentes para ler e avaliar.
            Cada uma delas apresenta duas alternativas poss??veis. Ambas s??o
            CORRETAS e V??LIDAS.
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Portanto, voc?? dever?? optar por aquela que melhor refletir a sua
            realidade interna: aquela que mais parece com aquilo que voc?? faz ou
            costuma fazer ou acredita que faria naquelas circunst??ncias.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            1) Selecione 2 ou 3 pontos ?? alternativa que voc?? escolher como a
            mais significativa, dependendo do grau de sua import??ncia comparada
            com a alternativa menos cotada.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            2) Na outra alternativa, selecione 0 ou 1, dependendo dos pontos que
            voc?? atribuiu ?? primeira, j?? que a pontua????o das duas dever?? somar
            sempre 3 pontos.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Isto n??o ?? um teste de conhecimentos. N??o h?? alternativas boas ou
            m??s, corretas ou incorretas. Insira nos quadradinhos correspondentes
            os pontos que voc?? atribuir.
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
                <Typography variant="whiteRegular">Avan??ar</Typography>
              </Button>
            </ButtonsContainer>
          </form>
        </div>
      </div>
    </Container>
  );
}
