import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Typography } from '~/components/atoms';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    'Expressão de medo',
    'Expressão de negação',
    'Expressão de alegria',
    'Expressão de tristeza',
    'Expressão de defesa de direitos',
    'Expressão de raiva',
    'Expressão de amor',
  ],
  datasets: [
    {
      label: '%',
      data: [75, 50, 100, 75, 50, 25, 100],
      borderColor: '#2B69D9',
      borderWidth: 2,
    },
  ],
};

export const RadarChart = () => {
  return (
    <div style={{ width: 600 }}>
      <Typography variant="title">Assertividade</Typography>
      <Radar data={data} />
    </div>
  );
};
