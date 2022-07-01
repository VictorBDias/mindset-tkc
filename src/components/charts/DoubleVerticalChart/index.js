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

export const DoubleVerticalChart = ({ labels, atualData, idealData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Atual',
        data: atualData,
        backgroundColor: '#2B69D9',
      },
      {
        label: 'Ideal',
        data: idealData,
        backgroundColor: 'rgba(255, 159, 64, 1)',
      },
    ],
  };
  return (
    <div style={{ height: 400, width: 500 }}>
      <Bar data={data} />
    </div>
  );
};
