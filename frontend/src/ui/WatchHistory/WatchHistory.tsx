import React from 'react';
import './watchhistory.css';
import WatchHistoryItem from "./WatchHistoryItem/WatchHistoryItem";
import PreviewImage from '../../assets/images/preview-image.png';
import {generateRandomString} from "../../utils/generateRandomString";

export default function WatchHistory() {
  return (
    <section className="watch-history">
      <h3 className="watch-history__title">История просмотров</h3>
      <ul className="watch-history__content">
        {Array.from(Array(5).keys()).map(() =>
          <WatchHistoryItem
            previewImage={PreviewImage}
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