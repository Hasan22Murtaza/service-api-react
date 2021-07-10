import { useState, useEffect, useReducer } from 'react';

import { eventsReducer, eventReducer } from '../Reducers/reducers';
import { apiPosts } from './axios';


export const useGetEvents = (initialState) => {
  const [state, dispatch] = useReducer(eventsReducer, {
    loading: false,
    error: false,
    data: [],
  });
  //{socialId: socialId}
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getSocial = async () => {
      await apiPosts({
        "method": "GET",
        "url" : "/events"
      })
      .then(res => {
        if (!ignore) 
        dispatch({ type: 'SUCCESS', data: res.data });
        console.log(res);
      })
      .catch(err => {
        dispatch({ type: 'ERROR', message: err.message});
        console.log(err);
      })
    };
    getSocial();
    return () => { ignore = true };
  }, [payload]);
  return state
}

export const useGetEvent = (initialState) => {
  const [state, dispatch] = useReducer(eventReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{eventId: eventId}
  const [eventId, setEventId] = useState(initialState);
  console.log("payload", eventId);
  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getEvent = async () => {
      await apiPosts({
        "method": "GET",
        "url" : "/events/"+eventId
      }).then(res => {
        if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR'});
        console.log(err);
      })
    };
    getEvent();
    return () => { ignore = true };
  }, [eventId]);
  return state
}
