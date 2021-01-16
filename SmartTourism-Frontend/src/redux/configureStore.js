import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Events } from './events';
import { UserDetails } from './UserDetails';
import { Hotels } from './Hotels';
import { Beaches } from './Beaches';
import { Parks } from './Parks';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            events: Events,
            userDetails: UserDetails,
            hotels: Hotels,
            beaches: Beaches,
            parks: Parks
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}