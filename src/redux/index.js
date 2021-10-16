import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import * as reducers from './reducers';

const combinedReducers = {};
Object.entries(reducers).forEach(([name, exported]) => {
  combinedReducers[name] = exported;
});

console.log(combinedReducers);

const rootReducer = combineReducers(combinedReducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export default store;
