import React from 'react';

type TProps = {
  width: number;
  height: number;
}

export default function ArrowUpIcon({ width, height }: TProps) {
  return (
    <svg style={{ transform: "rotate(180deg)" }} width={width} height={height} viewBox="0 0 16.5914 9.35641" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        id="Vector 42" d="M15.58 8.35L8.29 1.06L1 8.35" stroke="#FFFFFF" strokeOpacity="1.000000"
        strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round"
      />
    </svg>
  );
}