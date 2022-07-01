import React, { useEffect, useState } from 'react';
import { Typography } from '~/components/atoms';
import {
  HorizontalChart,
  RadarChart,
  PieChart,
  VerticalChart,
  DoubleVerticalChart,
} from '~/components/charts';

import { useGlobal } from '~/hooks/globalProvider';
import { getUserFeedbackAPI } from './apis';
import { useChartValues } from './helpers';

import { ChartContainer, Container, RowContainer } from './styles';

export const ChartJs = () => {
  const { userId } = useGlobal();
  const { handleCategoryValues, handleCategoryAverage } = useChartValues();

  //* STATES
  const [impulsores, setImpulsores] = useState();
  const [motivadores, setMotivadores] = useState();
  const [assertividade, setAssertividade] = useState();
  const [analiseGerencial, setAnaliseGerencial] = useState();

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

  useEffect(() => {
    if (userId)
      getUserFeedbackAPI({ category: 'gerencial', userId }).then(response =>
        setAnaliseGerencial(response.data)
      );
  }, [userId]);

  return (
    <Container>
      <ChartContainer>
        {/* <Typography variant="subtitle">Impulsores</Typography> */}
        <VerticalChart
          labels={['Perfeição', 'Esforço', 'Força', 'Apressado', 'Agradável']}
          values={handleCategoryValues(impulsores)}
        />
        <div style={{ display: 'row', marginTop: -200, marginLeft: 36 }}>
          <Typography variant="subTitle">Nivel atual dos impulsores</Typography>
          <RowContainer>
            {/* impulsores.reports.performance */}
            <Typography>Perfeição</Typography>
            <Typography>80%</Typography>
          </RowContainer>
          <RowContainer>
            <Typography>Esforço</Typography>
            <Typography>90%</Typography>
          </RowContainer>
          <RowContainer>
            <Typography>Força</Typography>
            <Typography>80%</Typography>
          </RowContainer>
          <RowContainer>
            <Typography>Apressado</Typography>
            <Typography>85%</Typography>
          </RowContainer>
          <RowContainer>
            <Typography>Agradável</Typography>
            <Typography>95%</Typography>
          </RowContainer>
        </div>
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

        <div style={{ display: 'row', marginTop: -200, marginLeft: 36 }}>
          <Typography>A poha de uma piramide</Typography>
          <RowContainer>
            <Typography>Potencial Atual: </Typography>
            <Typography>motivadores.potential%</Typography>
          </RowContainer>

          <RowContainer>
            <Typography>Potencial Máximo: </Typography>
            <Typography>100%</Typography>
          </RowContainer>
        </div>
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
      <ChartContainer>
        <DoubleVerticalChart
          atualData={handleCategoryValues(analiseGerencial)}
          idealData={handleCategoryAverage(analiseGerencial)}
          labels={analiseGerencial && analiseGerencial.groups}
        />
      </ChartContainer>
    </Container>
  );
};
