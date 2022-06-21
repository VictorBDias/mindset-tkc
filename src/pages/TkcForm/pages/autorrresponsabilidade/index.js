import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '~/components/atoms';
import history from '~/services/history';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Autorresponsabilidade() {
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('autorresponsabilidade').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'autorresponsabilidade',
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
                <InputBox
                  size={100}
                  onChange={field.onChange}
                  options={item.choices}
                />
              )}
              name={`autorresponsabilidade.${index}`}
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

    data.autorresponsabilidade.map(value => {
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
      userId: '0d7d26f1-911f-4f1a-8c02-bba9e7b79900',
      choices: choicesArray,
    }).then(() => history.push('/motivadores'));
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
          Questionário Autorresponsabilidade
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Não há respostas certas ou erradas. Selecione dentre aa opções SIM ou
          NÃO para as frases que você costuma repetir com frequência diária,
          semanal ou quinzenal.
        </Typography>
        <form
          className="autorresponsabilidade-form"
          onSubmit={handleSubmit(onSubmit)}
        >
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
