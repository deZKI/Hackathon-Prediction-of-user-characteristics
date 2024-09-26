import React from 'react';
import './viewergenderprobability.css';
import ProbabilityContent from "./ProbabilityContent/ProbabilityContent";

export default function ViewerGenderProbability() {
  return (
    <section className="viewer-gender-probability">
      <h3 className="viewer-gender-probability__title">Вероятный пол зрителя</h3>
      <ProbabilityContent />
    </section>
  );
}