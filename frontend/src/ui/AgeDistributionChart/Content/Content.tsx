import React from 'react';
import './content.css';
import {chartOptions, chartAreaBorder, chartTicksStyles} from "../../../utils/settingsChartJs/settingsChartJs";
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip} from "chart.js";
import convertDataForGraphics from "../../../utils/conversion/convertDataForGraphics";
import {EChartType} from "../../../types/customTypes/EChartType";
import {ERangeType} from "../../../types/customTypes/ERangeType";
import {TInitialState} from "../../../store/reducer";
import {Bar, Line, Bubble} from "react-chartjs-2";
import {useSelector} from "react-redux";

export default function ChartContent() {
  const chartType = useSelector<TInitialState, EChartType>(state => state.chartType.chartType);
  const rangeType = useSelector<TInitialState, ERangeType>(state => state.rangeType.rangeType);
  const rangeFrom = useSelector<TInitialState, string>(state => state.rangeFrom.rangeFrom);
  const rangeTo = useSelector<TInitialState, string>(state => state.rangeTo.rangeTo);
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const data = convertDataForGraphics(months, monthsNumbers, rangeType, rangeFrom, rangeTo);
  const chartPlugins = [chartAreaBorder, chartTicksStyles];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
  );

  return (
    <div className="">
      {chartType === EChartType.bar &&
        <Bar
          data={data}
          options={chartOptions}
          plugins={chartPlugins}
        />
      }
      {chartType === EChartType.line &&
        <Line
          data={data}
          options={chartOptions}
          plugins={chartPlugins}
        />
      }
      {chartType === EChartType.bubble &&
        <Bubble
          data={data}
          options={chartOptions}
          plugins={chartPlugins}
        />
      }
    </div>
  );
}