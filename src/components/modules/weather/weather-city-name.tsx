import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    color: '#888888',
  },
});

const WeatherCityName: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <Typography className={classes.title} variant="h1" component="h1" gutterBottom>
        {children}
      </Typography>
    </Box>
  );
};

export default WeatherCityName;
