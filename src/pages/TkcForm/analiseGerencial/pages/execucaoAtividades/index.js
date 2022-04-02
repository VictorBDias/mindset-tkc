import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
];

const questions = [
  {
    id: 1,
    value: 0,
    label: 'Fico revoltado por ter que cumprir horários.',
  },
];

export default function AnaliseGerencial() {
  const { control, handleSubmit } = useForm({});

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'analiseGerencial',
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
              name={`analiseGerencial.${index}`}
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
          Questionário Análise Gerencial
        </Typography>
        <Typography
          variant="regular"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Selecione um número de 0 a 3 nas células em branco, de acordo com a
          frequência que você age dentro do que é expresso, como se segue:
        </Typography>
        <Typography
          variant="subTitle"
          style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          0 - NUNCA 1 - ÀS VEZES 2 - MUITAS VEZES 3 - SEMPRE
        </Typography>
        <Typography>Execução de atividades</Typography>
        <form
          className="analiseGerencial-form"
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
