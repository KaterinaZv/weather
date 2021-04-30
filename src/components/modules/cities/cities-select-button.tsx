import React from 'react';

import { ROUTES } from '../../../constants/routes';

import { useHistory } from 'react-router-dom';

import { Nullable } from '../../../types/generic/Nullable';

import { useDispatch } from 'react-redux';
import { chooseCity } from '../../../store/modules/city/actions';
import { City } from '../../../store/model/city';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  button: {
    marginTop: '16px',
    width: '100%',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
});

type Props = {
  currentCity: Nullable<City>;
};

const CitiesSelectButton: React.FC<Props> = ({ currentCity }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onCitySelect = () => {
    if (currentCity) {
      dispatch(chooseCity(currentCity));

      history.push(ROUTES.weather);
    }
  };

  return (
    <Button
      className={classes.button}
      disabled={!currentCity}
      variant="contained"
      color="primary"
      onClick={onCitySelect}
    >
      ВЫБРАТЬ ГОРОД
    </Button>
  );
};

export default CitiesSelectButton;
