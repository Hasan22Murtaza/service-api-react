import { useState, useEffect, useReducer } from 'react';

import axios from 'axios';
import { apiOrganizer } from './axios';
import { checkinReducer, apiReducer, imageReducer } from '../Reducers/reducers';

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

export const useGetEvents = () => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    dispatch({ type: 'LOADING'});
    const get = async () => {
      await apiOrganizer
        .get('/event')
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data });
        })
        .catch(err => {
          dispatch({ type: 'ERROR'});
          console.log(err);
        })
    };
    get();
  }, []);

  return [state]
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