import React from 'react';

type TProps = {
  width: number;
  height: number;
  className?: string;
}

export default function DownloadIcon({ width, height, className }: TProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip53_120">
          <rect id="Upload" rx="0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fillOpacity="0"/>
        </clipPath>
      </defs>
      <rect id="Upload" rx="0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fillOpacity="0"/>
      <g clipPath="url(#clip53_120)">
        <path id="Icon"
              d="M28 20L28 25.33C28 26.04 27.71 26.71 27.21 27.21C26.71 27.71 26.04 28 25.33 28L6.66 28C5.95 28 5.28 27.71 4.78 27.21C4.28 26.71 4 26.04 4 25.33L4 20M22.66 10.66L16 4L9.33 10.66M16 4L16 20"
              stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="3.000000" strokeLinejoin="round"
              strokeLinecap="round"/>
      </g>
    </svg>
  );
}