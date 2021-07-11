import { useState, useEffect, useReducer } from 'react';

import { apiCall } from './axios';
import { orgEventsReducer, orgEventReducer, orgSettingReducer } from '../Reducers/reducers';



// done
export const useGetEvents = (initialState) => {
  const [state, dispatch] = useReducer(orgEventsReducer, {
    loading: false,
    error: false,
    data: [],
  });
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getSocial = async () => {
      await apiCall({
        "method": "GET",
        "url" : "/events"
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
// 
export const useGetEvent = (initialState) => {
  const [state, dispatch] = useReducer(orgEventReducer, {
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
      await apiCall({
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

export const useGetSetting = (initialState) => {
  const [state, dispatch] = useReducer(orgSettingReducer, {
    loading: false,
    error: false,
    data: null,
  });
  const [payload, setPayload] = useState(initialState);
  console.log("payload", payload);
  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getEvent = async () => {
      await apiCall({
        "method": "GET",
        "url" : "/org_informationt"
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
  }, [payload]);
  return state
}








// export const useGetVenue = (initialState) => {
//   const [state, dispatch] = useReducer(apiReducer, {
//     loading: false,
//     error: false,
//     data: null,
//   });
//   //{eventId: eventId}
//   const [payload, setPayload] = useState(initialState);

//   useEffect(() => {
//     let ignore = false;
//     dispatch({ type: 'LOADING'});
//     const getStuff = async () => {
//       await apiOrganizer
//       .get('/venue', {
//         params: payload
//       })
//       .then(res => {
//         if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
//       })
//       .catch(err => {
//         dispatch({ type: 'ERROR'});
//       })
//     };
//     getStuff();
//     return () => { ignore = true };
//   }, [payload]);
//   return [state, setPayload]
// }