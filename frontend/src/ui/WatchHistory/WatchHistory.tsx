import React from 'react';
import './watchhistory.css';
import {generateRandomString} from "../../utils/generation/generateRandomString";
import HistoryItem from "./HistoryItem/HistoryItem";

export default function WatchHistory() {
  return (
    <section className="watch-history">
      <h3 className="watch-history__title">История просмотров</h3>
      <ul className="watch-history__content">
        {Array.from(Array(5).keys()).map(() =>
          <HistoryItem
            title="Лучшие автомобили Японии"
            channel="BestAuto"
            views="70,5 тыс."
            time="5 дней назад"
            key={generateRandomString()}
          />
        )}
      </ul>
    </section>
  );
}