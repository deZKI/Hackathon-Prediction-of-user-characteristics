import sortAccountsBalancesByMonth from "../sorting/sortAccountBalancesByMonth";
import {ERangeType} from "../../types/customTypes/ERangeType";

interface Dataset {
  data: (number | null)[];
  backgroundColor: string;
  hoverBackgroundColor: string;
  categoryPercentage: number;
  yAxisID: string;
}

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export default function convertDataForGraphics(
  months: string[],
  monthsNumbers: string[],
  rangeType: ERangeType,
  rangeFrom: string,
  rangeTo: string
): ChartData {
  const monthsBalances = sortAccountsBalancesByMonth(months, monthsNumbers, rangeType, rangeFrom, rangeTo);

  const data: ChartData = {
    labels: ['', ...months, ''],
    datasets: [{
      data: [null, ...monthsBalances, null],
      backgroundColor: '#116ACC',
      hoverBackgroundColor: '#116ACC',
      categoryPercentage: 0.8,
      yAxisID: 'y'
    }]
  };

  return data;
};
