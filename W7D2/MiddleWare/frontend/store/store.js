import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import {applyMiddleware} from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState,
     applyMiddleware(addLoggingToDispatch, anotherMiddleware));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const anotherMiddleware = store => next => action => {
    console.log("I am Middleware 2----------------------");
  console.log("trial");
  next(action);
  console.log(next);
};

const addLoggingToDispatch = store => next => action => {
      console.log("I am Middleware 1----------------------");
      // console.log(store.getState());
      // console.log(action);
      next(action);
      // console.log(next);
      // console.log(store.getState());
};

export default configureStore;
