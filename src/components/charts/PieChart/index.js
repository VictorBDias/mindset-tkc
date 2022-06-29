import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ labels, needValue }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Assertividade',
        data: [100 - needValue, needValue],
        backgroundColor: ['rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 0.2)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        display: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
      }}
    >
      <Pie data={data} />
    </div>
  );
};
