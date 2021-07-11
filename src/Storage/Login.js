const TOKEN_KEY = 'jwt';
const PHONE_NUMBER = 'phoneNumber';
const MAGIC = 'magic';
const TYPE = "user_type";

export const setPhone = (token) => {
  localStorage.setItem(PHONE_NUMBER, token);
}

export const getPhone = () => {
  return localStorage.getItem(PHONE_NUMBER);
}

export const setMagic = (token) => {
  localStorage.setItem(MAGIC, token);
}

export const getMagic = () => {
  return localStorage.getItem(MAGIC);
}

export const setLogin = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const setType = (type) => {
  localStorage.setItem(TYPE, type);
}

export const setLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
}