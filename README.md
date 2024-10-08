# Предсказание социально-демографических характеристик пользователя

## Описание

RUTUBE.SPACE — это веб-приложение, разработанное для предсказания возраста, пола пользователя
с помощью истории просмотров

![img.png](images/img.png)  
## Задача

### Предсказание социальнодемографических характеристик пользователя
[Скачать данные по кейсу](https://lodmedia.hb.bizmrg.com/cases/1128568/RUTUBE%20%D1%81%D0%BE%D1%86-%D0%B4%D0%B5%D0%BC.pdf)

Пользователи RUTUBE не всегда оставляют свои данные, типо возраста и пола на платформе, что
усложняет выдачу им рекомендаций. Чтобы улучшить пользовательский опыт на видеоплатформе,
необходимо предсказать социально-демографические характеристики на основе данных
пользователей, которые заполнили анкету.

## Возможности

- **Загрузка CSV**: Пользователи могут загружать CSV-файлы в приложение.
- **Прогнозы**: Используется предобученная модель CatBoost для предоставления прогнозов на основе обработанных данных.
- **Визуализация**: Отображает обработанные данные и прогнозы пользователю.


## Список использованных технологий:

### Фронтенд

- **React**: Библиотека JavaScript для создания пользовательских интерфейсов.
- **Redux**: Предсказуемое хранилище состояния для JavaScript-приложений.
- **Axios**: Клиент HTTP на основе промисов для браузера и Node.js.

### Бэкенд

- **FastApi**: Высокоуровневый веб-фреймворк на языке Python, способствующий быстрому разработке и удобству.

### AI
- **CatBoost**: Это библиотека для градиентного бустинга, разработанная компанией Яндекс.
- **CUSTOM MODEL**: Также  мы разработали собственную архитектуру нейронной сети принимающую на вход последовательность токенов(видео). Модель использует слои эмбединга, одномерной свертки, LSTM, drop out, batch normalization и полносвязный слой на выходе. Также используется регуляризация. В предпоследний слой могут быть добавлены дополнительные фичи.
### Дополнительные библиотеки

## Запуск проекта

```sh
   docker compose up --build
```

# Результаты

## Контакты

DS:

- https://github.com/jettooss
- https://github.com/BogdanRoshchupkin
- https://t.me/Alukiko

FRONT:

- https://github.com/MarianRoshchupkin

BACKEND:

- https://github.com/deZKI
