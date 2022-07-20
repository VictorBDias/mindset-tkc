import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Typography, InputBox, Button } from '~/components/atoms';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Intensidade() {
  const history = useHistory();
  const { userId } = useParams();
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('burnout').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'intensidade',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace, questions]);

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
              name={`intensidade.${index}`}
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

    data.intensidade.map(value => {
      if (value.choices) {
        choicesArray.push({
          question_id: value.choices[0].question_id,
          choice_id: value.choices[0].id,
        });
      } else {
        choicesArray.push({
          question_id: value.question_id,
          choice_id: value.id,
        });
      }
    });

    answerQuestionsAPI({
      userId,
      choices: choicesArray,
    }).then(() => history.push(`/conexao/${userId}`));
  };

  const onSubmit = data => handleFormatAnswerData(data);

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
          Questionário Intensidade
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Responda selecionando as opções conforme critério abaixo:
        </Typography>
        <Typography
          variant="subTitle"
          style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          0 - NUNCA 1 - ANUALMENTE 2 - MENSALMENTE 3 - SEMANALMENTE 4 -
          DIARIAMENTE
        </Typography>
        <form className="intensidade-form" onSubmit={handleSubmit(onSubmit)}>
          <table>{fields.map((item, index) => renderField(item, index))}</table>

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
    </Container>
  );
}
