import React from 'react';
import './chartcontent.css';
import {doughnutChartOptions, doughnutTextInCenter} from "../../../utils/settingsChartJs";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from "chart.js";
import {TDoughnutData} from "../../../types/customTypes/TDoughnutData";
import {Doughnut} from "react-chartjs-2";
import {generateRandomString} from "../../../utils/generation/generateRandomString";

export default function ChartContent() {
  const statistics: { color: string, range: string, percentage: string }[] = [
    {
      color: "#116ACD",
      range: "9-20 лет",
      percentage: "25%"
    },
    {
      color: "#4BB2EC",
      range: "20-30 лет",
      percentage: "25%"
    },
    {
      color: "#8FC0DB",
      range: "30-40 лет",
      percentage: "25%"
    },
    {
      color: "#D8E9F3",
      range: "40-60 лет",
      percentage: "25%"
    },
  ];

  ChartJS.register(ArcElement, Tooltip, Legend, Title);

  const data: TDoughnutData = {
    datasets: [{
      data: [70, 20, 5, 5],
      backgroundColor: ['#116ACD', '#4BB2EC', '#8FC0DB', '#D8E9F3'],
      hoverBackgroundColor: ['#116ACD', '#4BB2EC', '#8FC0DB', '#D8E9F3'],
      borderWidth: 0,
      cutout: '75%',
    }],
  };

  return (
    <div className="viewer-age-chart__content">
      <div className="viewer-age-chart__statistics">
        <Doughnut data={data} options={doughnutChartOptions} plugins={doughnutTextInCenter} />
      </div>
      <ul className="viewer-age-chart__list">
        {statistics.map((item) =>
          <li className="viewer-age-chart__item" key={generateRandomString()}>
            <span className="viewer-age-chart__circle" style={{ backgroundColor: item.color }}></span>
            <span className="viewer-age-chart__range">{item.range}</span>
            <span className="viewer-age-chart__percentage">{item.percentage}</span>
          </li>
        )}
      </ul>
    </div>
  );
}