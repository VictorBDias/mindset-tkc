import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '~/components/atoms';
import PiramideMaslow from '../../assets/PiramideMaslow.png';
import {
  HorizontalChart,
  RadarChart,
  PieChart,
  VerticalChart,
  DoubleVerticalChart,
} from '~/components/charts';

import { getUserFeedbackAPI, sendEmailAPI } from './apis';
import { useChartValues } from './helpers';

import { ChartContainer, Container, RowContainer } from './styles';

export const ChartJs = () => {
  const { userId } = useParams();
  const {
    handleCategoryValues,
    handleCategoryAverage,
    handleImpulsoresCategoryName,
  } = useChartValues();

  //* STATES
  const [impulsores, setImpulsores] = useState();
  const [motivadores, setMotivadores] = useState();
  const [assertividade, setAssertividade] = useState();
  const [analiseGerencial, setAnaliseGerencial] = useState();

  useEffect(() => {
    sendEmailAPI({ userId });
  }, [userId]);

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

  const renderImpulsoresReports = reports => {
    if (reports)
      return (
        <RowContainer>
          <Typography>{handleImpulsoresCategoryName(reports.group)}</Typography>
          <Typography>{reports.performance}</Typography>
        </RowContainer>
      );
  };

  return (
    <Container>
      {/* ================= IMPULSORES =============== */}
      {impulsores && (
        <ChartContainer>
          <VerticalChart
            labels={['Perfei????o', 'Esfor??o', 'For??a', 'Apressado', 'Agrad??vel']}
            values={handleCategoryValues(impulsores)}
          />
          <div style={{ display: 'row', marginTop: -200, marginLeft: 36 }}>
            <Typography variant="subTitle">
              Nivel atual dos impulsores
            </Typography>
            {impulsores.reports.map(report => renderImpulsoresReports(report))}
          </div>
        </ChartContainer>
      )}

      {/* ================= MOTIVADORES =============== */}
      {motivadores && (
        <ChartContainer>
          <HorizontalChart
            labels={[
              'Auto-realiza????o',
              'Auto-estima',
              'Associa????o',
              'Seguran??a',
              'Fisiol??gicas',
            ]}
            values={handleCategoryValues(motivadores)}
          />

          <div
            style={{
              display: 'row',
              marginTop: -200,
              marginLeft: 36,
              width: 400,
            }}
          >
            <img
              src={PiramideMaslow}
              alt="logo"
              width="400"
              height="400"
              style={{ marginBottom: 24 }}
            />
            <RowContainer>
              <Typography>Potencial Atual: </Typography>
              <Typography>{`${motivadores.potential}%`}</Typography>
            </RowContainer>
            <RowContainer>
              <Typography>Potencial M??ximo: </Typography>
              <Typography>100%</Typography>
            </RowContainer>
          </div>
        </ChartContainer>
      )}

      {/* ================= ASSERTIVIDADE =============== */}
      {assertividade && (
        <ChartContainer style={{ marginTop: -60 }}>
          <RadarChart
            title="Assertividade"
            labels={[
              'Express??o de medo',
              'Express??o de nega????o',
              'Express??o de alegria',
              'Express??o de tristeza',
              'Express??o de defesa de direitos',
              'Express??o de raiva',
              'Express??o de amor',
            ]}
            values={handleCategoryValues(assertividade)}
          />
          <PieChart
            labels={['Atual', 'Necessidade']}
            needValue={assertividade && assertividade.need}
          />
        </ChartContainer>
      )}

      {/* ================= ANALISE GERENCIAL =============== */}
      {analiseGerencial && (
        <ChartContainer>
          <DoubleVerticalChart
            atualData={handleCategoryValues(analiseGerencial)}
            idealData={handleCategoryAverage(analiseGerencial)}
            labels={analiseGerencial && analiseGerencial.groups}
          />
        </ChartContainer>
      )}
    </Container>
  );
};
