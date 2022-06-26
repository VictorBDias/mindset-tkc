import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Perfeição', 'Esforço', 'Força', 'Apressado', 'Agradável'];

const values = [16, 22, 16, 23, 21];

export const VerticalBar = () => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Impulsores',
        data: values,
        backgroundColor: '#2B69D9',
      },
    ],
  };
  return (
    <div style={{ height: 400, width: 500 }}>
      <Bar data={data} />;
    </div>
  );
};
