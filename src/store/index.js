import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// Logger with default options
// import logger from "redux-logger";
import reducer from './reducer';

export default function configureStore(initialState = { path: 'test' }) {
    // const store = createStore(reducer, initialState, applyMiddleware(logger));
    const store = createStore(reducer, initialState);
    return store;
}
