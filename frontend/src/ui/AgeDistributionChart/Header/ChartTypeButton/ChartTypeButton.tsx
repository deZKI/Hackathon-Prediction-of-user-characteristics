import React from 'react';
import './charttypebutton.css';

type TProps = {
  icon: React.ReactNode;
  iconClassName?: string;
  handleClick: () => void;
}

export default function ChartTypeButton({ icon, iconClassName, handleClick }: TProps) {
  return (
    <button className={iconClassName} onClick={handleClick}>
      {icon}
    </button>
  );
}