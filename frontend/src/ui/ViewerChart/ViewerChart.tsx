import React from 'react';
import './viewerchart.css';
import ChartContent from "./ChartContent/ChartContent";
import ChartHeader from "./ChartHeader/ChartHeader";

export default function ViewerChart() {
  return (
    <section className="age-distribution-chart">
      <ChartHeader/>
      <ChartContent/>
    </section>
  );
}