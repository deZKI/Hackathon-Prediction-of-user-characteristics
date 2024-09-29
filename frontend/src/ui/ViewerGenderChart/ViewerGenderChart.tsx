import React from 'react';
import './viewergenderchart.css';
import ChartContent from "./ChartContent/ChartContent";

export default function ViewerGenderChart() {
  return (
    <section className="viewer-gender-chart">
      <h3 className="viewer-gender-chart__title">Вероятный пол зрителя</h3>
      <ChartContent />
    </section>
  );
}