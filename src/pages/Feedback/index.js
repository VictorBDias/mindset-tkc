import React from 'react';
import { VictoryBar, VictoryTheme, VictoryChart, VictoryAxis } from 'victory';

// import { Container } from './styles';

const data = [
  { group: 'Perfeição', total: 16 },
  { group: 'Esforço', total: 22 },
  { group: 'Força', total: 16 },
  { group: 'Apressado', total: 23 },
  { group: 'Agradável', total: 21 },
];

export const Feedback = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryAxis
        tickValues={[16, 22, 16, 23, 21]}
        tickFormat={['Perfeição', 'Esforço', 'Força', 'Apressado', 'Agradável']}
      />
      <VictoryAxis dependentAxis tickFormat={[0, 5.75, 11.5, 17.25, 23]} />
      <VictoryBar data={data} x="group" y="total" />
    </VictoryChart>
  );
};
