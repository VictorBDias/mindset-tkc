import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Typography, InputBox, Button } from '~/components/atoms';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function GestaoTempo() {
  const history = useHistory();
  const { userId } = useParams();
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('tempo').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'gestaoTempo',
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
              name={`gestaoTempo.${index}`}
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

    data.gestaoTempo.map(value => {
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
    }).then(() => history.push(`/intensidade/${userId}`));
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
          Question??rio Gest??o do Tempo
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Leia atentamente as quest??es e selecione as op????es conforme crit??rio
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
        <form className="gestaoTempo-form" onSubmit={handleSubmit(onSubmit)}>
          <table>{fields.map((item, index) => renderField(item, index))}</table>

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
    </Container>
  );
}
