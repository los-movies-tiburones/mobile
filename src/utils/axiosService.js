/* eslint-disable prettier/prettier */
import axios from 'axios';

const backendRequest = (token) => {
  const functionInstance = axios.create({
    baseURL: 'https://movie-shakers-auxiliar.herokuapp.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  return functionInstance;
};

const movieAPIRequest = () => {
  const functionInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    timeout: 10000,
  });
  return functionInstance;
};

const MOVIE_API_KEY = 'e3189a1e8a7022524d246c91283937ad';

export {backendRequest, movieAPIRequest, MOVIE_API_KEY};
