import { useState, useEffect, useReducer } from 'react';

import axios from 'axios';
import { apiOrganizer, apiPosts } from './axios';
import { checkinReducer, apiReducer, imageReducer, eventsReducer, eventReducer } from '../Reducers/reducers';

// hold
export const useCheckin = (initialSettings) => {
  const [state, dispatch] = useReducer(checkinReducer, {
    loading: false,
    error: false,
    data: null,
  });

  //Payload: {t: t, m: m, p: p, eventId: eventId}
  const [payload, setPayload] = useState(initialSettings);
  useEffect(() => {
    console.log(payload)
    if (payload) {
      dispatch({ type: 'LOADING'});
      const checkin = async () => {
        await apiOrganizer
        .post('/checkin', {t: payload.t, m: payload.m, p: payload.p, eventId: payload.eventId}) 
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err);
          })
      };
      checkin();
    }
  }, [payload]);

  return [state, setPayload]
}

// done
export const useGetEvents = (initialState) => {
  const [state, dispatch] = useReducer(eventsReducer, {
    loading: false,
    error: false,
    data: [],
  });
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
// done
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
        "url" : "/posts/"+eventId
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

export const useCreateEvent = () => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });
  const [payload, setPayload] = useState();

  useEffect(() => {
    if (payload) {
      dispatch({ type: 'LOADING'});
      const checkin = async () => {
        await apiOrganizer
          .post('/event', payload)
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err);
          })
      };
      checkin();
    }
  }, [payload]);

  return [state, setPayload]
}

export const useUploadImage = () => {
  const [state, dispatch] = useReducer(imageReducer, {
    loading: false,
    error: false,
    data: null,
  });
  const [file, setFile] = useState();  

  useEffect(() => {
    if (file) {
      const contentType = file.type; // eg. image/jpeg or image/svg+xml
      dispatch({ type: 'LOADING'});
      const uploadImage = async () => {
        await apiOrganizer
          .get('/presignedputurl', {
            params: {'Content-Type': contentType}
            })
          .then(response => {
            const {
              data: { res, imageURI }
            } = response;
            dispatch({ type: 'DATA', data: imageURI });
            let form = new FormData();
            Object.keys(res.fields).forEach(key => form.append(key, res.fields[key]))
            form.append('file', file)
            return (
            axios
              .post(res.url, form)
          )})
          .then(res2 => {
            dispatch({ type: 'SUCCESS' });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err.message);
          })
      };
      uploadImage();
    }
  }, [file]);

  return [state, setFile]
}



export const useGetSettings = (initialState) => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{eventId: eventId}
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getStuff = async () => {
      await apiOrganizer
      .get('/settings', {
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
    getStuff();
    return () => { ignore = true };
  }, [payload]);
  return [state, setPayload]
}

export const useGetData = (initialState) => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{eventId: eventId}
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getStuff = async () => {
      await apiOrganizer
      .get('/data', {
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
    getStuff();
    return () => { ignore = true };
  }, [payload]);
  return [state, setPayload]
}

export const useGetVenue = (initialState) => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //{eventId: eventId}
  const [payload, setPayload] = useState(initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'LOADING'});
    const getStuff = async () => {
      await apiOrganizer
      .get('/venue', {
        params: payload
      })
      .then(res => {
        if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR'});
      })
    };
    getStuff();
    return () => { ignore = true };
  }, [payload]);
  return [state, setPayload]
}