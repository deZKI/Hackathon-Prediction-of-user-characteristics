import React from 'react';
import './vieweragechart.css';
import ChartContent from "./ChartContent/ChartContent";

export default function ViewerAgeChart() {
  return (
    <section className="viewer-age-chart">
      <h3 className="viewer-age-chart__title">Вероятный возраст зрителя</h3>
      <ChartContent />
    </section>
  );
}