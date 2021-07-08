//const ORGANIZER_KEY = 'organizerId';
const EVENT = 'eventId';
const ORGANIZER_KEY = 'organizerId';

export const setEventId = (token) => {
  localStorage.setItem(EVENT, token);
}

export const getEventId = () => {
  return localStorage.getItem(EVENT);
}

export const setOrganizerLogin = (token) => {
  localStorage.setItem(ORGANIZER_KEY, token);
}

export const getOrganizer = () => {
  return localStorage.getItem(ORGANIZER_KEY);
}

export const setOrganizerLogout = () => {
  localStorage.removeItem(ORGANIZER_KEY);
}

export const isOrganizer = () => {
  if (localStorage.getItem(ORGANIZER_KEY)) {
    return true;
  }
  return false;
}