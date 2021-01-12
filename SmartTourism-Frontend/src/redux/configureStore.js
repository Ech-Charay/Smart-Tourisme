import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Events } from './events';
import { UserDetails } from './UserDetails';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            events: Events,
            userDetails: UserDetails
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}