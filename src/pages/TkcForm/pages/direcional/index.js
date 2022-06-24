import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '~/components/atoms';
import history from '~/services/history';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

export default function Direcional() {
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('direcional').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'direcional',
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
              name={`direcional.${index}`}
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

    data.direcional.map(value => {
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
          Questionário Direcional
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Leia cada frase, e selecione uma das opçõesque lhe pareça mais
          indicada. NÃO reflita demais sobre as frases. Em vez disso, compare a
          si mesmo com as "pessoas em geral" - e não somente com colegas de
          trabalho, amigos ou parentes.
        </Typography>
        <Typography
          variant="subTitle"
          style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          0 - NADA 1 - NÃO MUITO 2 - UM POUCO 3 - BASTANTE 4 - TOTALMENTE
        </Typography>
        <form className="direcional-form" onSubmit={handleSubmit(onSubmit)}>
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
