import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
