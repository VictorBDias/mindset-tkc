import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '~/components/atoms';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Atual', 'Necessidade'],
  datasets: [
    {
      label: 'LABEL',
      data: [32, 68],
      backgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 0.2)'],
      borderWidth: 1,
    },
  ],
};

export const PieChart = () => {
  return (
    <div
      style={{
        display: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
      }}
    >
      <Typography variant="title">Assertividade</Typography>
      <Pie data={data} />
    </div>
  );
};
