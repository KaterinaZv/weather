# Weather

Приложение для просмотра погоды.

TODO:
Не работает поиск городов и получения погоды. Необходимо либо найти другой сервис погоды, либо сделать proxy-сервер.

## Установка проекта

Зарегистрируйтесь на [сервисе погоды](https://yandex.ru/dev/weather/).

Скопируйте `.env.example` и переименуйте его в `.env`.

```bash
$ cp ./.env.example ./.env
```

Подставьте в значение `REACT_APP_WEATHER_API_KEY` ключ полученный на сервисе погоды.

```bash
# Клонируйте проект
$ git clone https://github.com/KaterinaZv/weather.git && cd ./weather

# Установите зависимости
$ npm install
```

## Запуск проекта

```bash
$ npm start

# Проект будет запущен на 3000 порту
```

## Используемые технологии

- [Typescript](https://www.typescriptlang.org/)
- [React](https://ru.reactjs.org/)
- [Create-react-app](https://create-react-app.dev/)
- [Redux](https://redux.js.org/)
- [Material-ui v4](https://material-ui.com/)
- [React router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Axios redux middleware](https://github.com/svrcekmichal/redux-axios-middleware)