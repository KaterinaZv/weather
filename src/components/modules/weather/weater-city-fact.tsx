import React from 'react';

import Box from '../../../../node_modules/@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { Fact } from '../../../store/model/weather';
import { temperatureWithSign } from '../../../utils/temterature';

type Props = {
  fact: Fact;
};

const useStyles = makeStyles({
  temerature: {
    color: '#7c7575',
    paddingTop: '20px',
  },
  image: {
    width: '144px',
  },
  feelsLike: {
    paddingTop: '20px',
    color: '#7c7575',
  },
  windSpeed: {
    paddingTop: '20px',
    color: '#7c7575',
  },
});

const WeatherCityFact: React.FC<Props> = ({ fact }) => {
  const classes = useStyles();
  const temperature = temperatureWithSign(fact.temp);
  const tempFeelsLike = temperatureWithSign(fact.feels_like);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Typography className={classes.temerature} color="primary" variant="h2">
        {temperature}
      </Typography>

      <img
        className={classes.image}
        alt=""
        src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${fact.icon}.svg`}
      />

      <Typography className={classes.feelsLike} color="primary">
        Ощущается как: {tempFeelsLike}
      </Typography>
      <Typography className={classes.windSpeed} color="primary">
        Скорость ветра: {fact.wind_speed} м/с
      </Typography>
    </Box>
  );
};

export default WeatherCityFact;
