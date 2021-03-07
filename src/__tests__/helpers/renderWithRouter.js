import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import rootReducer from '../../redux/reducers/index';

const renderWithReduxAndRouter = (
  routes,
  {
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>{routes}</Switch>
      </Router>
    </Provider>,
  ),
  store,
  history,
});

export default renderWithReduxAndRouter;