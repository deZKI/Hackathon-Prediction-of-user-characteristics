import React from 'react';
import './watchhistoryitem.css';

type TProps = {
  previewImage: string;
  title: string;
  channel: string;
  views: string;
  time: string;
}

export default function WatchHistoryItem({ previewImage, title, channel, views, time }: TProps) {
  return (
    <li className="watch-history__item">
      <a className="watch-history__link" href="#">
        <div className="watch-history__image-wrapper">
          <img className="watch-history__image" src={previewImage} alt={title} />
        </div>
        <div className="watch-history__info">
          <span className="watch-history__info__title">{title}</span>
          <span className="watch-history__info__channel">{channel}</span>
          <div className="watch-history__info__statistics">
            <span className="watch-history__info__views">{views}</span>
            <span className="watch-history__info__divider"></span>
            <span className="watch-history__info__time">{time}</span>
          </div>
        </div>
      </a>
    </li>
  );
}