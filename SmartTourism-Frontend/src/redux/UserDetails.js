import * as ActionTypes from './ActionTypes';

export const UserDetails = (state = {
	errMess: null,
	authenticated: window.localStorage.getItem("user") ? true: false,
	user: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null
}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
    	window.localStorage.setItem("authToken", action.payload.authToken);
    	if(action.payload.rememberMe){
    		window.localStorage.setItem("user", JSON.stringify(action.payload.user));
    	}
        return { ...state, errMess: null, authenticated: true, user: action.payload.user};

    case ActionTypes.LOGIN_FAILED:
      return {...state, errMess: action.payload, authenticated: false, user: null};

    case ActionTypes.LOGOUT:
    	window.localStorage.clear();
        return { ...state, errMess: null, authenticated: false, user: null};

    default:
      return state;
  }
};