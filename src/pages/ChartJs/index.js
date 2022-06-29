import React, { useEffect, useState } from 'react';
import { HorizontalChart } from '~/components/charts/HorizontalChart';
import { PieChart } from '~/components/charts/PieChart';
import { RadarChart } from '~/components/charts/RadarChart';
import { VerticalChart } from '~/components/charts/VerticalChart';

import { useGlobal } from '~/hooks/globalProvider';
import { getUserFeedbackAPI } from './apis';
import { useChartValues } from './helpers';

import { ChartContainer, Container } from './styles';

export const ChartJs = () => {
  const { userId } = useGlobal();
  const { handleCategoryValues } = useChartValues();

  //* STATES
  const [impulsores, setImpulsores] = useState();
  const [motivadores, setMotivadores] = useState();
  const [assertividade, setAssertividade] = useState();

  useEffect(() => {
    if (userId)
      getUserFeedbackAPI({ category: 'impulsores', userId }).then(response =>
        setImpulsores(response.data)
      );
  }, [userId]);

  useEffect(() => {
    if (userId)
      getUserFeedbackAPI({ category: 'motivadores', userId }).then(response =>
        setMotivadores(response.data)
      );
  }, [userId]);

  useEffect(() => {
    if (userId)
      getUserFeedbackAPI({ category: 'assertividade', userId }).then(response =>
        setAssertividade(response.data)
      );
  }, [userId]);

  return (
    <Container>
      <ChartContainer>
        <VerticalChart
          labels={['Perfeição', 'Esforço', 'Força', 'Apressado', 'Agradável']}
          values={handleCategoryValues(impulsores)}
        />
      </ChartContainer>
      <ChartContainer>
        <HorizontalChart
          labels={[
            'Auto-realização',
            'Auto-estima',
            'Associação',
            'Segurança',
            'Fisiológicas',
          ]}
          values={handleCategoryValues(motivadores)}
        />
      </ChartContainer>

      <ChartContainer>
        <RadarChart
          labels={[
            'Expressão de medo',
            'Expressão de negação',
            'Expressão de alegria',
            'Expressão de tristeza',
            'Expressão de defesa de direitos',
            'Expressão de raiva',
            'Expressão de amor',
          ]}
          values={handleCategoryValues(assertividade)}
        />
        <PieChart
          labels={['Atual', 'Necessidade']}
          needValue={assertividade && assertividade.need}
        />
      </ChartContainer>
    </Container>
  );
};
