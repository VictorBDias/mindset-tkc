import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../components/atoms';
import { answerQuestions, showImpulsores } from './apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Impulsores() {
  const [questionsApi, setQuestionsApi] = React.useState([]);
  const { control, handleSubmit } = useForm({});

  React.useEffect(() => {
    showImpulsores().then(response => setQuestionsApi(response.data.questions));
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'impulsores',
  });

  React.useEffect(() => {
    questionsApi.map(question => {
      append(question);
    });
  }, [append, replace, questionsApi]);

  const renderField = (item, index) => {
    return (
      <tr key={item.id}>
        <th>
          <QuestionContainer key={item.id}>
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <InputBox onChange={field.onChange} options={item.choices} />
              )}
              name={`impulsores.${index}`}
              control={control}
            />
            <Typography variant="regular">{item.sentence}</Typography>
          </QuestionContainer>
        </th>
      </tr>
    );
  };

  const handleFormatAnswerData = data => {
    const choicesArray = [];

    data.impulsores.map(value =>
      choicesArray.push({
        question_id: value.question_id,
        choice_id: value.id,
      })
    );

    answerQuestions({
      userId: '9a2d7e1a-a702-4f89-93fa-8872c17cd143',
      choices: choicesArray,
    });
  };

  const onSubmit = data => console.log(data.impulsores);

  return (
    <Container>
      <div style={{ display: 'row', width: 900 }}>
        <Typography
          variant="title"
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            fontWeight: 'bold',
            marginBottom: '24px',
          }}
        >
          Questionário Impulsores
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Leia atentamente as questões e selecione as opções conforme critério
          abaixo:{' '}
        </Typography>
        <Typography
          variant="subTitle"
          style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          0 - NUNCA 1 - QUASE NUNCA 2 - ALGUMAS VEZES 3 - QUASE SEMPRE 4 -
          SEMPRE
        </Typography>
        <form className="impulsores-form" onSubmit={handleSubmit(onSubmit)}>
          <table>{fields.map((item, index) => renderField(item, index))}</table>

          <ButtonsContainer>
            <Button size="lg" variant="outline">
              <Typography variant="accentRegular">Voltar</Typography>
            </Button>
            <Button size="lg" variant="solid" type="submit">
              <Typography variant="whiteRegular">Avançar</Typography>
            </Button>
          </ButtonsContainer>
        </form>
      </div>
    </Container>
  );
}
