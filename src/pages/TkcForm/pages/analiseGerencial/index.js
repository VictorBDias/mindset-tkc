import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useGlobal } from '~/hooks/globalProvider';
import { Button, InputBox, Typography } from '~/components/atoms';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function AnaliseGerencial() {
  const { userId } = useGlobal();
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('gerencial').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'analiseGerencial',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace, questions]);

  const handleFormatAnswerData = data => {
    const choicesArray = [];

    data.analiseGerencial.map(value => {
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
    });
  };

  const renderChoice = (choice, choiceIndex, index) => (
    <tr key={choice.id}>
      <th>
        <QuestionContainer key={choice.id}>
          <Controller
            render={({ field }) => (
              <InputBox options={choice.dependencies} {...field} />
            )}
            name={`analiseGerencial.${index}.dependencies.${choiceIndex}`}
            control={control}
          />
          <Typography variant="regular">{choice.sentence}</Typography>
        </QuestionContainer>
      </th>
    </tr>
  );

  const renderField = (item, index) => {
    const { choices } = item;
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.sentence}
        </Typography>
        <table>
          {choices.map((choice, choiceIndex) =>
            renderChoice(choice, choiceIndex, index)
          )}
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
            Questionário Análise Gerencial
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Selecione um número de 0 a 3 nas células em branco, de acordo com a
            frequência que você age dentro do que é expresso, como se segue:
          </Typography>
          <Typography
            variant="subTitle"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            0 - NUNCA 1 - ÀS VEZES 2 - MUITAS VEZES 3 - SEMPRE
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            className="analiseGerencial-form"
            onSubmit={handleSubmit(onSubmit)}
          >
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
