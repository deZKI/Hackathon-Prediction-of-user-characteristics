import React from 'react';
import './header.css';
import ChartTypeButton from "./ChartTypeButton/ChartTypeButton";
import BubbleChartIcon from "../../Icons/BubbleChartIcon";
import LineChartIcon from "../../Icons/LineChartIcon";
import BarChartIcon from "../../Icons/BarChartIcon";

export default function ChartHeader() {
  function handleClick() {}

  return (
    <div className="age-distribution-chart__header">
      <h3 className="age-distribution-chart__title">Распределение зрителей по возрасту</h3>
      <div className="age-distribution-chart__types">
        <ChartTypeButton
          icon={<BarChartIcon/>}
          iconClassName="age-distribution-chart__type-button"
          handleClick={handleClick}
        />
        <ChartTypeButton
          icon={<LineChartIcon/>}
          iconClassName="age-distribution-chart__type-button"
          handleClick={handleClick}
        />
        <ChartTypeButton
          icon={<BubbleChartIcon/>}
          iconClassName="age-distribution-chart__type-button"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}