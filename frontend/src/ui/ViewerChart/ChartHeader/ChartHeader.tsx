import React from 'react';
import './chartheader.css';
import {setChartType} from "../../../store/chartType/chartTypeActions";
import {EChartType} from "../../../types/customTypes/EChartType";
import ChartTypeButton from "./ChartTypeButton/ChartTypeButton";
import LineChartIcon from "../../Icons/LineChartIcon";
import {TInitialState} from "../../../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import BarChartIcon from "../../Icons/BarChartIcon";

export default function ChartHeader() {
  const chartType = useSelector<TInitialState, EChartType>(state => state.chartType.chartType);
  const dispatch = useDispatch();

  function handleClick(type: EChartType) {
    dispatch(setChartType(type));
  }

  return (
    <div className="age-distribution-chart__header">
      <h3 className="age-distribution-chart__title">Распределение зрителей по возрасту</h3>
      <div className="age-distribution-chart__types">
        <ChartTypeButton
          icon={<BarChartIcon/>}
          isActive={chartType === EChartType.bar}
          handleClick={() => handleClick(EChartType.bar)}
        />
        <ChartTypeButton
          icon={<LineChartIcon/>}
          isActive={chartType === EChartType.line}
          handleClick={() => handleClick(EChartType.line)}
        />
      </div>
    </div>
  );
}