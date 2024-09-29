import React from 'react';
import './charttypebutton.css';
import classNames from "classnames";

type TProps = {
  icon: React.ReactNode;
  isActive: boolean;
  handleClick: () => void;
}

export default function ChartTypeButton({ icon, isActive, handleClick }: TProps) {
  return (
    <button
      className={classNames("age-distribution-chart__type-button", {
        ["age-distribution-chart__type-button--active"]: isActive
      })}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
}