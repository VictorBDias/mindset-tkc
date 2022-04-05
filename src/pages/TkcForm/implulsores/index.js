import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../components/atoms';
import { showImpulsores } from './apis';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
  { id: 5, value: 4, label: '4' },
];

// "id": "3f48670c-c11f-4630-b35b-c4804db31f28",
// "category_id": "49bb4258-cdce-448b-bcd0-101a67977e94",
// "sentence": "Cada vez que faço algo, exijo de mim a maior perfeição ainda a que atividade demore mais.",
// "type": "common",
// "min_choice": null,
// "max_choice": null,
// "order": 1

const questions = [
  {
    id: 1,
    value: 0,
    label:
      'Cada vez que faço algo, exijo de mim a maior perfeição ainda a que atividade demore mais.',
  },
  {
    id: 2,
    value: 0,
    label: 'Custa-me muito fazer as coisas que a maioria das pessoas fazem.',
  },
  {
    id: 3,
    value: 0,
    label:
      'Evito mostrar minhas emoções, principalmente chorar na frente dos outros.',
  },
  { id: 4, value: 0, label: 'Faço várias coisas ao mesmo tempo.' },
  { id: 5, value: 0, label: 'Custa-me dizer não se me pedem algo.' },
  { id: 6, value: 0, label: 'Valorizo usar bem as palavras.' },
  {
    id: 7,
    value: 0,
    label:
      'Percebo que a vida é uma luta continua e que tudo exige um grande esforço.',
  },
  { id: 8, value: 0, label: 'Necessito trabalhar rápido.' },
  { id: 9, value: 0, label: 'Aguento em silêncio, mesmo sofrendo..' },
  {
    id: 10,
    value: 0,
    label: 'Desde criança os outros estão sempre em primeiro lugar para mim.',
  },
  {
    id: 11,
    value: 0,
    label:
      'Ainda que termine de fazer as coisas bem, penso que poderia ter sido feito melhor.',
  },
  {
    id: 12,
    value: 0,
    label: 'Faço muito rodeio, demoro para responder as coisas.',
  },
  { id: 13, value: 0, label: 'As pessoas resistem em me acompanhar.' },
  {
    id: 14,
    value: 0,
    label: 'Responsabilizo-me sozinho pelo trabalho por mais duro que seja.',
  },
  { id: 15, value: 0, label: 'Necessito estar bem com todas as pessoas.' },
  {
    id: 16,
    value: 0,
    label: 'Se digo algo positivo, necessito completá-lo com algo negativo.',
  },
  {
    id: 17,
    value: 0,
    label:
      'É mais difícil para mim fazer as coisas de modo prático e simples. Complico a minha vida.',
  },
  {
    id: 18,
    value: 0,
    label: 'Faço as tarefas dos outros por não ter paciência de esperá-los.',
  },
  {
    id: 19,
    value: 0,
    label:
      'Quando todos se sentem enfraquecidos, eu me mantenho e lhes dou apoio.',
  },
  { id: 20, value: 0, label: 'Gosto que me sirvam.' },
  { id: 21, value: 0, label: 'Detesto desordem.' },
  {
    id: 22,
    value: 0,
    label: 'Esforço-me ao máximo se as coisas não saem como eu quero.',
  },
  {
    id: 23,
    value: 0,
    label:
      'Tendo a interromper as pessoas para poder terminar o que estava dizendo.',
  },
  { id: 24, value: 0, label: 'Detesto ser protegido.' },
  {
    id: 25,
    value: 0,
    label: 'Tento adivinhar o que os outros necessitam para logo agradá-los.',
  },
  {
    id: 26,
    value: 0,
    label: 'É insuportável os erros dos demais, é difícil ficar conformado.',
  },
  {
    id: 27,
    value: 0,
    label: 'Só dou valor ao que se obtém com grande esforço.',
  },
  {
    id: 28,
    value: 0,
    label: 'Quando quero ou pergunto algo, quero uma resposta imediata.',
  },
  { id: 29, value: 0, label: 'Detesto que me neguem o que quero.' },
  {
    id: 30,
    value: 0,
    label: 'Exijo dos demais a máxima qualificação no estudo e no trabalho.',
  },
  {
    id: 31,
    value: 0,
    label: 'Repito as perguntas que eu faço para facilitar que me compreendam.',
  },
  { id: 32, value: 0, label: 'Irrito-me com pessoas lentas.' },
  { id: 33, value: 0, label: 'Primeiro o dever e a disciplina.' },
  {
    id: 34,
    value: 0,
    label: 'Sinto-me responsável em fazer as outras pessoas se sentirem bem.',
  },
];

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
    questions.map(question => {
      append(question);
    });
  }, [append, replace]);

  const renderField = (item, index) => {
    return (
      <tr key={item.id}>
        <th>
          <QuestionContainer key={item.id}>
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <InputBox onChange={field.onChange} options={options} />
              )}
              name={`impulsores.${index}`}
              control={control}
            />
            <Typography variant="regular">{item.label}</Typography>
          </QuestionContainer>
        </th>
      </tr>
    );
  };

  const onSubmit = data => console.log(data);

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
