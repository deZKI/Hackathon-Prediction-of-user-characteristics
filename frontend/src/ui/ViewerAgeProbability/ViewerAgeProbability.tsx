import React from 'react';
import './viewerageprobability.css';
import ProbabilityContent from "./ProbabilityContent/ProbabilityContent";

export default function ViewerAgeProbability() {
  return (
    <section className="viewer-age-probability">
      <h3 className="viewer-age-probability__title">Вероятный возраст зрителя</h3>
      <ProbabilityContent />
    </section>
  );
}