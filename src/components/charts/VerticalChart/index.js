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

export const VerticalChart = ({ labels, values }) => {
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
