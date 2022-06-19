import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';
import { Typography, Button } from '../../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';
import history from '~/services/history';

export default function PredominanciaCerebral() {
  const [choicesArray, setChoicesArray] = React.useState([]);
  const { control, handleSubmit } = useForm({});
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('cerebral').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { replace, append } = useFieldArray({
    control,
    name: 'predominanciaCerebral',
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
    });
  };

  const renderChoice = (choice, item) => (
    <tr key={choice.id}>
      <th>
        <QuestionContainer key={choice.id}>
          <Checkbox
            size="lg"
            colorScheme="orange"
            onChange={() => handleAnswer(item, choice.id)}
          >
            <Typography variant="regular">{choice.sentence}</Typography>
          </Checkbox>
        </QuestionContainer>
      </th>
    </tr>
  );

  const renderField = item => {
    const { choices } = item;
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.sentence}
        </Typography>
        <table>{choices.map(choice => renderChoice(choice, item))}</table>
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
            Questionário Predominância Cerebral
          </Typography>

          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Responda com muita sinceridade as questões abaixo, selecione as
            alternativas que mais te representam hoje.
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Não tente "acertar" as respostas que parecem mais "adequadas" ou
            "socialmente corretas". Para não distorcer o resultado, procure ser
            bem verdadeiro e escolher a resposta mais adequada para você!
          </Typography>
          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Essas questões são baseadas nos estudos de Ned Hermann.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            className="predominanciaCerebral-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {questions.map((item, index) => renderField(item, index))}
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
