import React from 'react';

import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

const NotFoundContainer: React.FC = () => (
  <Container maxWidth="sm">
    <h1>NOT FOUND :(((9</h1>

    <li>
      <Link to="/">Home</Link>
    </li>
  </Container>
);

export default NotFoundContainer;
