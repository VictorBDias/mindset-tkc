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

  return { handleCategoryValues, handleCategoryAverage };
};
