import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes.jsx';
import configureStore from './configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'css/global.css'

const store = configureStore();

injectTapEventPlugin(); // http://stackoverflow.com/a/34015469/988941

const Root = ({ store }) => (
  <Provider store={ store }>
    <Routes history={ syncHistoryWithStore(browserHistory, store) } />
  </Provider>
);

render(
  <Root store={ store } />,
  document.getElementById('root')
);
