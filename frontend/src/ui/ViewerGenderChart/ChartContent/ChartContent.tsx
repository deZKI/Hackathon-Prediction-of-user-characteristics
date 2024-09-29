import React from 'react';
import './chartcontent.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import {Bar} from "react-chartjs-2";

export default function ChartContent() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

  const data: any = {
    labels: ['Мужчины', 'Женщины'],
    datasets: [{
        data: [65.7, 34.3],
        backgroundColor: ['#116ACD', '#D8E9F3'],
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options: any = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        drawBorder: false,
      },
      y: {
        ticks: {
          font: {
            family: "'Roboto', sans-serif",
            size: 14,
          },
          color: '#ffffff',
          paddingRight: 100,
        },
        grid: {
          display: false,
        },
        drawBorder: false,
      },
    },
  };

  return (
    <div className="viewer-gender-chart__content">
      <div className="viewer-gender-chart__statistics">
        <Bar data={data} options={options} />
      </div>
      <div className="viewer-gender-chart__percentage">
        <span className="viewer-gender-chart__number">65,7 %</span>
        <span className="viewer-gender-chart__number">34,3 %</span>
      </div>
    </div>
  );
}