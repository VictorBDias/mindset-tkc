import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';
import { Typography, Button } from '../../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import history from '~/services/history';

export default function Autoresponsabilidade() {
  const [choicesArray, setChoicesArray] = React.useState([]);
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('Autorresponsabilidade').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { replace, append } = useFieldArray({
    control,
    name: 'autoresponsabilidade',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace, questions]);

  function handleAnswer(question, choiceId) {
    const alreadySelected = choicesArray.findIndex(
      item => item.choice_id === choiceId
    );
    if (alreadySelected >= 0) {
      const filteredAnswers = choicesArray.filter(
        item => item.choice_id !== choiceId
      );

      setChoicesArray(filteredAnswers);
    } else {
      setChoicesArray([
        ...choicesArray,
        {
          question_id: question.id,
          choice_id: choiceId,
        },
      ]);
    }
  }

  const handleFormatAnswerData = () => {
    answerQuestionsAPI({
      userId: '0d7d26f1-911f-4f1a-8c02-bba9e7b79900',
      choices: choicesArray,
    }).then(() => history.push('/analiseGerencial/1'));
  };

  const renderField = item => {
    const { choices } = item;
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.sentence}
        </Typography>
        <table>
          <tr key={item.id}>
            <th>
              <QuestionContainer key={item.id}>
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  onChange={() => handleAnswer(item, choices[0].id)}
                >
                  <Typography variant="regular">
                    {choices[0].sentence}
                  </Typography>
                </Checkbox>
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
            Questionário de Autoresponsabilidade
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Não há respostas certas ou erradas. Selecione as opções que você
            costuma repetir com frequência diária, semanal ou quinzenal.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            className="autoresponsabilidade-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {questions.map(item => renderField(item))}
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
      </div>
    </Container>
  );
}
