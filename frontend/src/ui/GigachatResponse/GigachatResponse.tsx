import React from 'react';
import './gigachatresponse.css';

export default function GigachatResponse() {
  return (
    <section className="gigachat-response">
      <h3 className="gigachat-response__title">Интерпретация результатов от Gigachat</h3>
      <div className="gigachat-response__sex">
        <span className="gigachat-response__sex__title">Предсказанный пол: </span>
        <span className="gigachat-response__sex__desc">Мужской</span>
      </div>
      <div className="gigachat-response__age">
        <span className="gigachat-response__age__title">Предсказанный возраст: </span>
        <span className="gigachat-response__age__desc">26-35 лет</span>
      </div>
      <div className="gigachat-response__factors">
        <span className="gigachat-response__factors__title">Ключевые факторы, повлиявшие на предсказание:</span>
        <span className="gigachat-response__factors__desc">
          Спортивные видео и новости составляют 60% вашей активности, что характерно для мужской аудитории.
          Просмотр анимационных фильмов и комедийных шоу в выходные добавляет уверенность модели в том, что
          вы находитесь в возрастной категории 26-35 лет.
        </span>
      </div>
    </section>
  );
}