import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addEvent = (event) => ({
    type: ActionTypes.ADD_EVENT,
    payload: event
  });
  
export const postEvent = (name, date, localisation, description, isPrivate) => (dispatch) => {
  
    const newEvent = {
        name: name,
        date: date,
        localisation: localisation,
        description: description,
        isPrivate: isPrivate
    };
    
    return fetch(baseUrl + 'events', {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addEvent(response)))
    .catch(error =>  { console.log('post events', error.message); alert('Your event could not be posted\nError: '+error.message); });
  };

export const eventsLoading = () => ({
    type: ActionTypes.EVENTS_LOADING
});

export const eventsFailed = (errmess) => ({
    type: ActionTypes.EVENTS_FAILED,
    payload: errmess
});

export const addEvents = (events) => ({
    type: ActionTypes.ADD_EVENTS,
    payload: events
});

export const fetchEvents = () => (dispatch) => {

    dispatch(eventsLoading(true));

    return fetch(baseUrl + 'event')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(events => dispatch(addEvents(events)))
    .catch(error => dispatch(eventsFailed(error.message)));
}