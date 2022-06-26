import React from 'react';
import { HorizontalChart } from '~/components/charts/HorizontalChart';
import { PieChart } from '~/components/charts/PieChart';
import { RadarChart } from '~/components/charts/RadarChart';
import { VerticalBar } from '~/components/charts/VerticalBar';

// import { Container } from './styles';

export const ChartJs = () => {
  return (
    <div>
      <HorizontalChart />
      <RadarChart />
      <PieChart />
      <VerticalBar />
    </div>
  );
};
