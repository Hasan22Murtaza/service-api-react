import { useState, useEffect, useReducer } from 'react';

import { vanuesReducer, vanueReducer } from '../Reducers/reducers';
import {  apiPosts } from './axios';





export const useGetVanues = (initialState) => {
  const [state, dispatch] = useReducer(vanuesReducer, {
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
        "url" : "/vanues"
      })
      .then(res => {
        if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
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

export const useGetVanue = (initialState) => {
  const [state, dispatch] = useReducer(vanueReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{vanueId: vanueId}
  const [vanueId, setVanueId] = useState(initialState);
  console.log("payload", vanueId);
  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getEvent = async () => {
      await apiPosts({
        "method": "GET",
        "url" : "/vanues/"+vanueId
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
  }, [vanueId]);
  return state
}
