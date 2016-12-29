import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);