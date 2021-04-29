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

import { getCityList } from '../../../store/modules/city/actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  },
});

const CitiesListContainer: React.FC = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [currentCity, setCity] = React.useState<Nullable<City>>(null);

  const cities = useSelector<Store, City[]>(store => store.city.cities);

  const onChange = (city: Nullable<City>) => setCity(city);

  const onInputChange = debounce((value: Nullable<string>) => {
    if (!value) return;

    dispatch(getCityList(value))
  }, 400);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CitiesFilter
        cities={cities}
        onChange={onChange}
        onInputChange={onInputChange}
      />

      <CitiesSelectButton currentCity={currentCity} />
    </Container>
  )
};

export default CitiesListContainer;
