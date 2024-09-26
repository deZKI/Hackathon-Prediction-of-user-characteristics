import React from 'react';
import './homepage.css';
import ViewerGenderProbability from "../../ui/ViewerGenderProbability/ViewerGenderProbability";
import ViewerAgeProbability from "../../ui/ViewerAgeProbability/ViewerAgeProbability";
import AgeDistributionChart from "../../ui/AgeDistributionChart/AgeDistributionChart";
import GigachatSwitcher from "../../ui/GigachatSwitcher/GigachatSwitcher";
import GigachatResponse from "../../ui/GigachatResponse/GigachatResponse";
import UsersDropdown from "../../ui/UsersDropdown/UsersDropdown";
import ExportButton from "../../ui/ExportButton/ExportButton";
import WatchHistory from "../../ui/WatchHistory/WatchHistory";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Аналитика по истории просмотров</h1>
          <div className="header__actions">
            <ExportButton/>
            <UsersDropdown />
            <GigachatSwitcher/>
          </div>
        </div>
       <div className="header__divider"></div>
      </header>
      <main className="main">
        <div className="main__container">
          <div className="main__statistics">
            <AgeDistributionChart/>
            <div className="main__statistics__probability">
              <ViewerAgeProbability />
              <ViewerGenderProbability />
            </div>
            <GigachatResponse />
          </div>
          <div className="main__history">
            <WatchHistory />
          </div>
        </div>
      </main>
    </>
  );
}