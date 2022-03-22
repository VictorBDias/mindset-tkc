import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';
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
    question:
      'Suponha que você está numa roda de amigos e surge um desentendimento entre dois deles. A situação vai se complicando e você sente muito medo. O que faz?',

    option1: {
      id: 1,
      value: 0,
      label:
        'Afasta-se o mais rápido que puder, deixando que os dois resolvam.',
    },
    option2: {
      id: 2,
      value: 0,
      label: 'Mostra-se tranquilo (embora não esteja) e se afasta com calma.',
    },
    option3: {
      id: 3,
      value: 0,
      label: 'Revela a eles os seus temores e ajuda a resolver o problema.',
    },
  },
  {
    id: 2,
    question: 'Numa festa acontece algo muito engraçado. O que você faz?',

    option1: {
      id: 1,
      value: 0,
      label: 'Evita rir muito para não aparecer demais.',
    },
    option2: {
      id: 2,
      value: 0,
      label: 'Ri muito na proporção em que a coisa é engraçada.',
    },
    option3: {
      id: 3,
      value: 0,
      label: 'Dá grandes gargalhadas, não se importando com o ambiente.',
    },
  },
];

export default function Assertividade() {
  const { control, handleSubmit } = useForm({});

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'assertividade',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace]);

  // const renderField = (item, index) => {
  //   return (
  //     <div style={{ marginTop: 32 }}>
  //       <Typography variant="regular" style={{ marginBottom: 8 }}>
  //         {item.question}
  //       </Typography>
  //       <table>
  //         <tr key={item.option1.id}>
  //           <th>
  //             <QuestionContainer key={item.id}>
  //               <Controller
  //                 rules={{ required: true }}
  //                 render={({ field }) => (
  //                   <InputBox options={options} {...field} />
  //                 )}
  //                 name={`assertividade.${index}.option1`}
  //                 control={control}
  //               />
  //               <Typography variant="regular">{item.option1.label}</Typography>
  //             </QuestionContainer>
  //           </th>
  //         </tr>
  //         <tr key={item.id}>
  //           <th>
  //             <QuestionContainer key={item.option2.id}>
  //               <Controller
  //                 rules={{ required: true }}
  //                 render={({ field }) => (
  //                   <InputBox options={options} {...field} />
  //                 )}
  //                 name={`assertividade.${index}.option2`}
  //                 control={control}
  //               />
  //               <Typography variant="regular">{item.option2.label}</Typography>
  //             </QuestionContainer>
  //           </th>
  //         </tr>
  //         <tr key={item.option3}>
  //           <th>
  //             <QuestionContainer key={item.option3.id}>
  //               <Controller
  //                 rules={{ required: true }}
  //                 render={({ field }) => (
  //                   <InputBox options={options} {...field} />
  //                 )}
  //                 name={`assertividade.${index}.option3`}
  //                 control={control}
  //               />
  //               <Typography variant="regular">{item.option3.label}</Typography>
  //             </QuestionContainer>
  //           </th>
  //         </tr>
  //       </table>
  //     </div>
  //   );
  // };

  const renderField = (item, index) => {
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.question}
        </Typography>
        <table>
          <tr key={item.option1.id}>
            <th>
              <QuestionContainer key={item.id}>
                <Checkbox size="lg" colorScheme="orange">
                  <Typography variant="regular">
                    {item.option1.label}
                  </Typography>
                </Checkbox>
              </QuestionContainer>
            </th>
          </tr>
          <tr key={item.id}>
            <th>
              <QuestionContainer key={item.option2.id}>
                <Checkbox size="lg" colorScheme="orange">
                  <Typography variant="regular">
                    {item.option2.label}
                  </Typography>
                </Checkbox>
              </QuestionContainer>
            </th>
          </tr>
          <tr key={item.option3}>
            <th>
              <QuestionContainer key={item.option3.id}>
                <Checkbox size="lg" colorScheme="orange">
                  <Typography variant="regular">
                    {item.option3.label}
                  </Typography>
                </Checkbox>
              </QuestionContainer>
            </th>
          </tr>
        </table>
      </div>
    );
  };

  const onSubmit = data => console.log(data);

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
            Questionário Assertividade
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            As perguntas abaixo não tem por objetivo avaliar você. Servirão
            apenas, para ajudá-lo(a) a compreender melhor alguns aspectos do seu
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
            honesto(a) for, melhor para você.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Procure colocar-se em cada situação abaixo e responda como se
            comportaria realmente nelas. Declare o que você faz, habitualmente,
            em situações idênticas e não o que gostaria de fazer. Se não houve
            uma resposta que corresponda exatamente ao que faz, escolha a que
            mais se aproxime do comportamento que teria naquela situação.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            className="assertividade-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {fields.map((item, index) => renderField(item, index))}
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
