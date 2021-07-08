import { useState, useEffect, useReducer } from 'react';

import { socialReducer, eventReducer, apiReducer } from '../Reducers/reducers';
import { apiSite, apiPosts } from './axios';

import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  NEXT_PAGE: "next-page",
};

const BASE_URL =
  "https://jsonplaceholder.typicode.com/posts";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, games: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, games: action.payload.games };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        games: [],
      };
    case ACTIONS.NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    default:
      return state;
  }
}

export default function useFetchGames(params, page) {
  const [state, dispatch] = useReducer(reducer, { games: [], loading: true });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL)
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { games: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

  

    return () => {
      cancelToken1.cancel();
    };
  }, [params, page]);

  return state;
}



export const useGetSocial = (initialState) => {
  const [state, dispatch] = useReducer(socialReducer, {
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
        "url" : "/posts"
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

export const useGetEvent = (initialState) => {
  const [state, dispatch] = useReducer(eventReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{eventId: eventId}
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getEvent = async () => {
      await apiSite
      .get('/event', {
        params: payload
      })
      .then(res => {
        if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR'});
        console.log(err);
      })
    };
    getEvent();
    return () => { ignore = true };
  }, [payload]);
  return [state, setPayload]
}

export const useCreateLead = () => {
  const [payload, setPayload] = useState();

  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (payload) {
      dispatch({ type: 'LOADING'});
      const lead = async () => {
        await apiSite
          .post('/lead' , {data: payload})
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
          })
      };
      lead();
    }
  }, [payload]);

  return [state, setPayload]
}