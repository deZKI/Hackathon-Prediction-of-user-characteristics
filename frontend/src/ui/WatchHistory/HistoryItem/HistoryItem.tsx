import React from 'react';
import './historyitem.css';

type TProps = {
  title: string;
  channel: string;
  views: string;
  time: string;
}

export default function HistoryItem({ title, channel, views, time }: TProps) {
  return (
    <li className="watch-history__content__item">
      <span className="watch-history__content__title">{title}</span>
      <div className="watch-history__content__info">
        <span className="watch-history__info__channel">{channel}</span>
        <div className="watch-history__info__divider"></div>
        <div className="watch-history__info__statistics">
          <span className="watch-history__statistics__views">{views}</span>
          <span className="watch-history__statistics__divider"></span>
          <span className="watch-history__statistics__time">{time}</span>
        </div>
      </div>
    </li>
  );
}