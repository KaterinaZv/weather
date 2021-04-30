import React from 'react';
import Typography from '@material-ui/core/Typography';

const WeatherCityName: React.FC = ({ children }) => (
  <Typography variant="h1" component="h2" gutterBottom>
    {children}
  </Typography>
);

export default WeatherCityName;
