import * as ActionTypes from './ActionTypes';

export const Events = (state = { errMess: null, events:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EVENT:
        var event = action.payload;
        return { ...state, events: state.events.concat(event)};

    case ActionTypes.ADD_EVENTS:
      return {...state, errMess: null, events: action.payload};

    case ActionTypes.EVENTS_FAILED:
      return {...state, errMess: action.payload};

    
    case ActionTypes.EVENTS_LOADING:
        return { state, isLoading: true, errMess: null, events: []}

    default:
      return state;
  }
};