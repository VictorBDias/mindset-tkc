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

const labels = ['January', 'February', 'March', 'April', 'May'];
const values = [16, 22, 16, 23, 21];

export const options = {
  indexAxis: 'y',
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: values,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const HorizontalChart = () => {
  return <Bar data={data} options={options} />;
};
