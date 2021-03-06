import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';
import { Typography, Button } from '../../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';
import { answerQuestionsAPI, listQuestionsAPI } from '../../apis';

export default function Assertividade() {
  const history = useHistory();
  const { userId } = useParams();
  const { control, handleSubmit } = useForm({});

  const [choicesArray, setChoicesArray] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    listQuestionsAPI('assertividade').then(response =>
      setQuestions(response.data.questions)
    );
  }, []);

  const { replace, append } = useFieldArray({
    control,
    name: 'assertividade',
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
      userId,
      choices: choicesArray,
    }).then(() => history.push(`/analiseGerencial/${userId}`));
  };

  const renderField = item => {
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
          <tr key={choices[1].id}>
            <th>
              <QuestionContainer key={choices[1].id}>
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  onChange={() => handleAnswer(item, choices[1].id)}
                >
                  <Typography variant="regular">
                    {choices[1].sentence}
                  </Typography>
                </Checkbox>
              </QuestionContainer>
            </th>
          </tr>
          <tr key={choices[2].id}>
            <th>
              <QuestionContainer key={choices[2].id}>
                <Checkbox
                  size="lg"
                  colorScheme="orange"
                  onChange={() => handleAnswer(item, choices[2].id)}
                >
                  <Typography variant="regular">
                    {choices[2].sentence}
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
            Question??rio Assertividade
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            As perguntas abaixo n??o tem por objetivo avaliar voc??. Servir??o
            apenas, para ajud??-lo(a) a compreender melhor alguns aspectos do seu
            comportamento.
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Selecione a anternativa que escolher. Quanto mais sincero(a) e
            honesto(a) for, melhor para voc??.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Procure colocar-se em cada situa????o abaixo e responda como se
            comportaria realmente nelas. Declare o que voc?? faz, habitualmente,
            em situa????es id??nticas e n??o o que gostaria de fazer. Se n??o houve
            uma resposta que corresponda exatamente ao que faz, escolha a que
            mais se aproxime do comportamento que teria naquela situa????o.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            className="assertividade-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {questions.map(item => renderField(item))}
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
