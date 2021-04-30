import React from 'react';

import debounce from 'lodash/debounce';

import { Nullable } from '../../../types/generic/Nullable';

import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store/types/Store';
import { City } from '../../../store/model/city';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import CitiesFilter from './cities-filter';
import CitiesSelectButton from './cities-select-button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
});

const CitiesListContainer: React.FC = () => {
  const classes = useStyles();

  const [currentCity, setCity] = React.useState<Nullable<City>>(null);

  const cities = useSelector<Store, City[]>((store) => store.city.cities);

  const onChange = (city: Nullable<City>) => setCity(city);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CitiesFilter cities={cities} onChange={onChange} />

      <CitiesSelectButton currentCity={currentCity} />
    </Container>
  );
};

export default CitiesListContainer;
