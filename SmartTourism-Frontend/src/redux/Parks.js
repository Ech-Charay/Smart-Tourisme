import * as ActionTypes from './ActionTypes';

export const Parks = (state = { isLoading: false,errMess: null, parks:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PARKS:
      return {...state, isLoading: false, errMess: null, parks: action.payload};

    case ActionTypes.PARKS_FAILED:
      return {...state, isLoading: false, errMess: action.payload, parks: []};

    
    case ActionTypes.PARKS_LOADING:
        return {...state, isLoading: true, errMess: null, parks: []};

    default:
      return state;
  }
};