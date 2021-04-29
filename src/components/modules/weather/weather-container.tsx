import React from 'react';

import { useHistory } from "react-router-dom";

import { ROUTES } from '../../../constants/routes';

import { Nullable } from '../../../types/generic/Nullable';

import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../../store/types/Store';

import { City } from '../../../store/model/city';
import { getWeather } from '../../../store/modules/weather/actions';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const WeatherContainer: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const choosedCity = useSelector<Store, Nullable<City>>(store => store.city.choosedCity);

  React.useEffect(() => {
    if (!choosedCity) {
      history.replace(ROUTES.home)
    } else {
      dispatch(getWeather(choosedCity));
    }
  }, []);

  if (!choosedCity) return null;
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="h2" gutterBottom>
        {choosedCity.name}
      </Typography>
    </Container>
  )
}

export default WeatherContainer;