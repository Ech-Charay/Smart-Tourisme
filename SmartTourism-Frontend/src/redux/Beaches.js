import * as ActionTypes from './ActionTypes';

export const Beaches = (state = { isLoading: false,errMess: null, beaches:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BEACHES:
      return {...state, isLoading: false, errMess: null, beaches: action.payload};

    case ActionTypes.BEACHES_FAILED:
      return {...state, isLoading: false, errMess: action.payload, beaches: []};

    case ActionTypes.BEACHES_LOADING:
        return {...state, isLoading: true, errMess: null, beaches: []};

    default:
      return state;
  }
};