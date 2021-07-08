import axios from 'axios';
import { getToken } from '../Storage/Login';
import { getOrganizer } from '../Storage/Organizer';


const apiPosts = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

const apiLogin = axios.create({
  baseURL: "https://" + process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_LOGIN,
  headers: {
    common: {
      "x-api-key": process.env.REACT_APP_API_KEY
    }
  }
})

const apiData = axios.create({
  baseURL: "https://" + process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_DATA,
  headers: {
    common: {
      "Authorization": getToken()
    }
  }
})

const apiOrganizer = axios.create({
  baseURL: "https://" + process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_ORGANIZER,
  headers: {
    common: {
      "Authorization": getOrganizer()
    }
  }
})


const apiSite = axios.create({
  baseURL: "https://" + process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_SITE,
  headers: {
    common: {
      "x-api-key": process.env.REACT_APP_API_KEY
    }
  } 
})

export {apiLogin, apiPosts , apiData, apiOrganizer, apiSite};