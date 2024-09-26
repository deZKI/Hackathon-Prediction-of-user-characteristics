import React from 'react';

type TProps = {
  width: number;
  height: number;
}

export default function UserIcon({ width, height }: TProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 18.5 20.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="Icon"
        d="M17.25 19.25L17.25 17.25C17.25 16.18 16.82 15.17 16.07 14.42C15.32 13.67 14.31 13.25 13.25 13.25L5.25 13.25C4.18 13.25 3.17 13.67 2.42 14.42C1.67 15.17 1.25 16.18 1.25 17.25L1.25 19.25M9.25 9.25C7.04 9.25 5.25 7.45 5.25 5.25C5.25 3.04 7.04 1.25 9.25 1.25C11.45 1.25 13.25 3.04 13.25 5.25C13.25 7.45 11.45 9.25 9.25 9.25Z"
        stroke="#347BA3" strokeOpacity="1.000000" strokeWidth="2.500000" strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}