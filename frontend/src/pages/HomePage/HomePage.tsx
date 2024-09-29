import React from 'react';
import './homepage.css';
import ViewerGenderChart from "../../ui/ViewerGenderChart/ViewerGenderChart";
import ViewerAgeChart from "../../ui/ViewerAgeChart/ViewerAgeChart";
import UserDropdown from "../../ui/UserDropdown/UserDropdown";
import ExportButton from "../../ui/ExportButton/ExportButton";
import WatchHistory from "../../ui/WatchHistory/WatchHistory";
import ViewerChart from "../../ui/ViewerChart/ViewerChart";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Аналитика по истории просмотров</h1>
          <div className="header__actions">
            <ExportButton/>
            <UserDropdown />
          </div>
        </div>
       <div className="header__divider"></div>
      </header>
      <main className="main">
        <div className="main__container">
          <div className="main__statistics">
            <ViewerChart/>
            <div className="main__statistics__probability">
              <ViewerAgeChart />
              <ViewerGenderChart />
            </div>
          </div>
          <div className="main__history">
            <WatchHistory />
          </div>
        </div>
      </main>
    </>
  );
}