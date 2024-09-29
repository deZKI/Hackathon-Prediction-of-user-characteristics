import React from 'react';
import './chartcontent.css';
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip} from "chart.js";
import {barLineChartOptions, barLineChartAreaBorder, barLineChartTicksStyles} from "../../../utils/settingsChartJs";
import sortAccountsBalancesByMonth from "../../../utils/sorting/sortAccountBalancesByMonth";
import {TBarLineData} from "../../../types/customTypes/TBarLineData";
import {EChartType} from "../../../types/customTypes/EChartType";
import {ERangeType} from "../../../types/customTypes/ERangeType";
import {TInitialState} from "../../../store/reducer";
import {Bar, Line} from "react-chartjs-2";
import {useSelector} from "react-redux";

export default function ChartContent() {
  const chartType = useSelector<TInitialState, EChartType>(state => state.chartType.chartType);
  const rangeType = useSelector<TInitialState, ERangeType>(state => state.rangeType.rangeType);
  const rangeFrom = useSelector<TInitialState, string>(state => state.rangeFrom.rangeFrom);
  const rangeTo = useSelector<TInitialState, string>(state => state.rangeTo.rangeTo);
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const monthsBalances = sortAccountsBalancesByMonth(months, monthsNumbers, rangeType, rangeFrom, rangeTo);
  const barLineChartPlugins = [barLineChartAreaBorder, barLineChartTicksStyles];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip
  );

  const data: TBarLineData = {
    labels: ['', ...months, ''],
    datasets: [{
      data: [null, ...monthsBalances, null],
      backgroundColor: '#116ACC',
      hoverBackgroundColor: '#116ACC',
      categoryPercentage: 0.8,
      yAxisID: 'y'
    }]
  };

  return (
    <div className="age-distribution-chart__content">
      {chartType === EChartType.bar &&
        <Bar
          data={data}
          options={barLineChartOptions}
          plugins={barLineChartPlugins}
        />
      }
      {chartType === EChartType.line &&
        <Line
          data={data}
          options={barLineChartOptions}
          plugins={barLineChartPlugins}
        />
      }
    </div>
  );
}