import { useState, useEffect, useReducer } from 'react';
import { apiLogin } from './axios';

import { organizerLoginReducer, fanLoginReducer } from '../Reducers/reducers';
import { setOrganizerLogin } from '../Storage/Organizer';
import { setLogin, setMagic, setPhone } from '../Storage/Login';

const usePostPhone = ({phoneNumber}) => {

  const [state, dispatch] = useReducer(fanLoginReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (phoneNumber) {
      dispatch({ type: 'LOADING'});
      const postPhone = async () => {
        await apiLogin
        .post('/fanpassword' , {phoneNumber: phoneNumber.replace('+', '')})
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: 'ERROR'});
        })
      };
      postPhone();
    }
  }, [phoneNumber]);

  return [state]
}

const usePostPassword = (props) => {
  const [state, dispatch] = useReducer(fanLoginReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (props) {
      dispatch({ type: 'LOADING'});
      const apiCall = async () => {
        await apiLogin
          .post('/login' , {phoneNumber: props.phoneNumber, password: props.password})  
          .then(res => {
            setLogin(res.data.token)
            setMagic(res.data.magic)
            setPhone(res.data.phoneNumber)
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: 'ERROR'});
          })
      };
      apiCall();
    }
  }, [props]);

  return [state]
}

const useLoginOrganizer = () => {
  const [creds, setCreds] = useState();

  const [state, dispatch] = useReducer(organizerLoginReducer, {
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    if (creds) {
      dispatch({ type: 'LOADING'});
      const login = async () => {
        await apiLogin
          .post('/loginorganizer' , {accountId: creds.accountId, password: creds.password})
          .then(res => {
            setOrganizerLogin(res.data.token)
            dispatch({ type: 'SUCCESS', data: res.data });
          })
          .catch(err => {
            dispatch({ type: 'ERROR'});
          })
      };
      login();
    }
  }, [creds]);

  return [state, setCreds]
}

export { usePostPhone, usePostPassword, useLoginOrganizer };