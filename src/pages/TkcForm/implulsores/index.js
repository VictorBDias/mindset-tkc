import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
  { id: 5, value: 4, label: '4' },
];

const questions = [
  {
    id: 1,
    description:
      'Cada vez que faço algo, exijo de mim a maior perfeição ainda a que atividade demore mais.',
  },
  {
    id: 2,
    description:
      'Custa-me muito fazer as coisas que a maioria das pessoas fazem.',
  },
  {
    id: 3,
    description:
      'Evito mostrar minhas emoções, principalmente chorar na frente dos outros.',
  },
  { id: 4, description: 'Faço várias coisas ao mesmo tempo.' },
  { id: 5, description: 'Custa-me dizer não se me pedem algo.' },
  { id: 6, description: 'Valorizo usar bem as palavras.' },
  {
    id: 7,
    description:
      'Percebo que a vida é uma luta continua e que tudo exige um grande esforço.',
  },
  { id: 8, description: 'Necessito trabalhar rápido.' },
  { id: 9, description: 'Aguento em silêncio, mesmo sofrendo..' },
  {
    id: 10,
    description:
      'Desde criança os outros estão sempre em primeiro lugar para mim.',
  },
  {
    id: 11,
    description:
      'Ainda que termine de fazer as coisas bem, penso que poderia ter sido feito melhor.',
  },
  {
    id: 12,
    description: 'Faço muito rodeio, demoro para responder as coisas.',
  },
  { id: 13, description: 'As pessoas resistem em me acompanhar.' },
  {
    id: 14,
    description:
      'Responsabilizo-me sozinho pelo trabalho por mais duro que seja.',
  },
  { id: 15, description: 'Necessito estar bem com todas as pessoas.' },
  {
    id: 16,
    description:
      'Se digo algo positivo, necessito completá-lo com algo negativo.',
  },
  {
    id: 17,
    description:
      'É mais difícil para mim fazer as coisas de modo prático e simples. Complico a minha vida.',
  },
  {
    id: 18,
    description:
      'Faço as tarefas dos outros por não ter paciência de esperá-los.',
  },
  {
    id: 19,
    description:
      'Quando todos se sentem enfraquecidos, eu me mantenho e lhes dou apoio.',
  },
  { id: 20, description: 'Gosto que me sirvam.' },
  { id: 21, description: 'Detesto desordem.' },
  {
    id: 22,
    description: 'Esforço-me ao máximo se as coisas não saem como eu quero.',
  },
  {
    id: 23,
    description:
      'Tendo a interromper as pessoas para poder terminar o que estava dizendo.',
  },
  { id: 24, description: 'Detesto ser protegido.' },
  {
    id: 25,
    description:
      'Tento adivinhar o que os outros necessitam para logo agradá-los.',
  },
  {
    id: 26,
    description:
      'É insuportável os erros dos demais, é difícil ficar conformado.',
  },
  { id: 27, description: 'Só dou valor ao que se obtém com grande esforço.' },
  {
    id: 28,
    description: 'Quando quero ou pergunto algo, quero uma resposta imediata.',
  },
  { id: 29, description: 'Detesto que me neguem o que quero.' },
  {
    id: 30,
    description:
      'Exijo dos demais a máxima qualificação no estudo e no trabalho.',
  },
  {
    id: 31,
    description:
      'Repito as perguntas que eu faço para facilitar que me compreendam.',
  },
  { id: 32, description: 'Irrito-me com pessoas lentas.' },
  { id: 33, description: 'Primeiro o dever e a disciplina.' },
  {
    id: 34,
    description:
      'Sinto-me responsável em fazer as outras pessoas se sentirem bem.',
  },
];

export default function Impulsores() {
  const { control, handleSubmit } = useForm({});

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
              render={({ field }) => <InputBox {...field} options={options} />}
              name={`impulsores.${index}`}
              control={control}
            />
            <Typography variant="regular">{item.description}</Typography>
          </QuestionContainer>
        </th>
      </tr>
    );
  };

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <div style={{ display: 'row' }}>
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
