import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(routerMiddleware(history)))
);

export default store;
