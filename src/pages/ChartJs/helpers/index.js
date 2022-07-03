// import { Container } from './styles';

export const useChartValues = () => {
  const handleCategoryValues = impulsores => {
    const auxArray = [];
    if (impulsores)
      impulsores.reports.map(report => {
        auxArray.push(report.sum);
      });
    return auxArray;
  };

  const handleCategoryAverage = impulsores => {
    const auxArray = [];
    if (impulsores)
      impulsores.reports.map(report => {
        auxArray.push(report.avg);
      });
    return auxArray;
  };

  const handleImpulsoresCategoryName = group => {
    switch (group) {
      case 'P':
        return 'PERFEIÇÃO';

      case 'E':
        return 'ESFORÇO';

      case 'F':
        return 'FORÇA';

      case 'AP':
        return 'APRESSADO';

      case 'AG':
        return 'AGRADÁVEL';

      default:
        return 'PERFEIÇÃO';
    }
  };

  return {
    handleCategoryValues,
    handleCategoryAverage,
    handleImpulsoresCategoryName,
  };
};
