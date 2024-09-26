import React from 'react';
import './exportbutton.css';
import DownloadIcon from "../Icons/DownloadIcon";

export default function ExportButton() {
  return (
    <button className="header__export-button">
      <DownloadIcon width={28} height={28} />
    </button>
  );
}