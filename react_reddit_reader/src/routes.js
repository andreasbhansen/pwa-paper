import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Detail from './Detail';

export default (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/detail" component={Detail} />
  </Router>
);