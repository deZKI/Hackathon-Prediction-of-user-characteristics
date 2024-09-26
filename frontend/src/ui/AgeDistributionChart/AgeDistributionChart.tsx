import React from 'react';
import './agedistributionchart.css';
import ChartContent from "./Content/Content";
import ChartHeader from "./Header/Header";

export default function AgeDistributionChart() {
  return (
    <section className="age-distribution-chart">
      <ChartHeader/>
      <ChartContent/>
    </section>
  );
}