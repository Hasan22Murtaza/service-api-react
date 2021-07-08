import { useState, useEffect, useReducer } from 'react';

import { apiData } from './axios';
import { fanDataReducer, socialReducer, fanProfileReducer, apiReducer } from '../Reducers/reducers';
import { getToken } from '../Storage/Login';
 
export const useGetFan = () => {
  const [state, dispatch] = useReducer(fanDataReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    dispatch({ type: "LOADING" })
    const getFan = async () => {
      await apiData
        .get('/fan', {
          headers: {"Authorization": getToken()}
        })
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data });
        })
        .catch(err => {
          console.log(err.response)
          dispatch({ type: 'ERROR' });
        })
    };
    getFan();
  }, []);

  return [state]
}

export const useGetFanProfile = () => {
  const [state, dispatch] = useReducer(fanProfileReducer, {
    loading: false,
    error: false,
    data: null,
  });
  useEffect(() => {
    dispatch({ type: 'LOADING'});
    const getFanProfile = async () => {
      await apiData
        .get('/fanprofile', {
          headers: {"Authorization": getToken()}
        })
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data });
        })
        .catch(err => {
          console.log(err.response)
          dispatch({ type: 'ERROR'});
        })
    };
    getFanProfile();
  }, []);

  return [state]
}

export const useUpdateFanProfile = () => {
  const [profileData, setProfileData] = useState(null);

  const [state, dispatch] = useReducer(fanProfileReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (profileData) {
      dispatch({ type: 'LOADING'});
      const updateProfile = async () => {
        await apiData
          .put('/fanprofile', {data: profileData}) 
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
          })
      };
      updateProfile();
    }
  }, [profileData]);

  return [state, setProfileData]
}

export const useCreateSocial = () => {
  const [state, dispatch] = useReducer(socialReducer, {
    loading: false,
    error: false,
    data: null,
  });

  //{seatSelected: props.seatSelected, fanEventData: props.fanEventData, socialType: props.socialType}
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    if (payload) {
      dispatch({ type: 'LOADING'});
      const createSocial = async () => {
        await apiData
          .post('/social', payload)
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err);
          })
      };
      createSocial();
    }
  }, [payload]);

  return [state, setPayload]
}

export const useUpdateSocial = () => {

  const [state, dispatch] = useReducer(socialReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //Payload: {socialId: socialId, seatIds: seatIds}
  const [payload, setPayload] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (payload) {
      dispatch({ type: 'LOADING'});
      const updateSocial = async () => {
        await apiData
        .put('/social' , payload) 
          .then(res => {
            if (!ignore) dispatch({ type: 'SUCCESS', data: res.data});
          })
          .catch(err => {
            dispatch({ type: 'ERROR', reason: err.response.data.reason});           
          })
      };
      updateSocial();
      return () => { ignore = true };
    }
  }, [payload]);

  return [state, setPayload]
}

export const useUpdateSeat = () => {

  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });
  //Payload: {socialId: socialId, seatIds: seatIds}
  const [payload, setPayload] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (payload) {
      dispatch({ type: 'LOADING'});
      const updateSeat = async () => {
        await apiData
        .put('/seat' , payload) 
          .then(res => {
            if (!ignore) dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err);
          })
      };
      updateSeat();
      return () => { ignore = true };
    }
  }, [payload]);

  return [state, setPayload]
}

export const usePayment = () => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: false,
    data: null,
  });

  //Payload: {t: t, m: m, p: p, eventId: eventId, organizer: organizer}
  const [payload, setPayload] = useState();

  useEffect(() => {
    if (payload) {
      dispatch({ type: 'LOADING'});
      const payment = async () => {
        await apiData
        .post('/payment', payload) 
          .then(res => {
            dispatch({ type: 'SUCCESS', data: res });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
            console.log(err);
          })
      };
      payment();
    }
  }, [payload]);

  return [state, setPayload]
}

export const postPayment = async (payload) => {
  const res = await apiData
    .post('/payment', payload, {
      headers: {"Authorization": getToken()}
    })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log("error")
      return err
    })
  return res
};