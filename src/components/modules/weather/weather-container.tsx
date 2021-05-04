import React from 'react';

import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';

import { Nullable } from '../../../types/generic/Nullable';

import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../../store/types/Store';

import { City } from '../../../store/model/city';
import { getWeather } from '../../../store/modules/weather/actions';
import { Forecast, Weather } from '../../../store/model/weather';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import WeatherCityName from './weather-city-name';
import WeatherCityFact from './weater-city-fact';

const useStyles = makeStyles({
  container: {
    paddingTop: '64px',
    paddingBottom: '64px',
  },
});

const WeatherContainer: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const choosedCity = useSelector<Store, Nullable<City>>((store) => store.city.choosedCity);

  const weather = useSelector<Store, Nullable<Weather>>((store) => store.weather.weather);

  React.useEffect(() => {
    if (!choosedCity) {
      history.replace(ROUTES.home);
    } else {
      dispatch(getWeather(choosedCity));
    }
  }, []);

  if (!choosedCity) return null;

  return (
    <Container className={classes.container} maxWidth="sm">
      <WeatherCityName>{choosedCity.name}</WeatherCityName>
      {weather && <WeatherCityFact fact={weather.fact} />}
    </Container>
  );
};

export default WeatherContainer;
