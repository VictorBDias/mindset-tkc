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

export const RadarChart = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: '%',
        data: values,
        borderColor: '#2B69D9',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: 600 }}>
      <Radar data={data} />
    </div>
  );
};
