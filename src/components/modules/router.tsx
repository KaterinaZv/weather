import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import CitiesListContainer from './cities/cities-list-container';
import NotFoundContainer from './notfound/notfound-container';
import WeatherContainer from './weather/weather-container';

const WeatherApplicationRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.home}>
        <CitiesListContainer />
      </Route>

      <Route path={ROUTES.weather}>
        <WeatherContainer />
      </Route>

      <Route path="*">
        <NotFoundContainer />
      </Route>
    </Switch>
  </Router>
);

export default WeatherApplicationRouter;
