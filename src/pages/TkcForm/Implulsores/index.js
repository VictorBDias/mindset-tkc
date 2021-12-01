import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../components/atoms';
import { QuestionContainer, ButtonsContainer } from './styles';

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
];

const questions = [
  { id: 0, description: ' testando 123' },
  { id: 1, description: ' testando 456' },
];

export default function Impulsores() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: [{ id: 1, value: 0, label: '0' }],
    },
  });

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'test',
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
            <InputBox {...register(`test.${index}`)} options={options} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}`}
              control={control}
            />
            <Typography variant="regular">
              Cada vez que faço algo, exijo de mim a maior perfeição ainda a que
              atividade demore mais.
            </Typography>
          </QuestionContainer>
        </th>
      </tr>
    );
  };

  const onSubmit = data => console.log('data', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <table>{fields.map((item, index) => renderField(item, index))}</table>
      <ButtonsContainer>
        <Button variant="outline">
          <Typography variant="accentRegular">Voltar</Typography>
        </Button>
        <Button variant="solid" type="submit">
          <Typography variant="whiteRegular">Avançar</Typography>
        </Button>
      </ButtonsContainer>
    </form>
  );
}
