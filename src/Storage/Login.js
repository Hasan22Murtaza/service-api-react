const TOKEN_KEY = 'jwt';
const PHONE_NUMBER = 'phoneNumber';
const MAGIC = 'magic';

export const setPhone = (token) => {
  sessionStorage.setItem(PHONE_NUMBER, token);
}

export const getPhone = () => {
  return sessionStorage.getItem(PHONE_NUMBER);
}

export const setMagic = (token) => {
  sessionStorage.setItem(MAGIC, token);
}

export const getMagic = () => {
  return sessionStorage.getItem(MAGIC);
}

export const setLogin = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export const setLogout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
}

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
}

export const isLogin = () => {
  if (sessionStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
}