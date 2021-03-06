import API_ENDPOINTS from '../config/api';

import { applyMiddleware, createStore, compose, Store } from 'redux';

import createReducers from './reducer';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

export default function configureStore(): Store {
  const client = axios.create({
    baseURL: API_ENDPOINTS.BASE_API_URL,
  });

  // @ts-ignore
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const reducers = createReducers();

  const store = createStore(reducers, composeEnhancers(applyMiddleware(axiosMiddleware(client))));

  return store;
}
