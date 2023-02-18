import axios from "../utils/axios";
import config from '../configs/index'

const { apiKey } = config;

export function fetch(type, status, page = 1) {
  return axios.get(
    `${type}/${status}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
  );
}

export function fetchDetails(type, id) {
  return axios.get(
    `${type}/${id}?api_key=${apiKey}&language=${navigator.languages[0]}`
  );
}

export function fetchTreanding(type, day) {
  return axios.get(
    `trending/${type}/${day}?api_key=${apiKey}`
  );
}

export function fetchLatest(type, status, page = 1) {
  return axios.get(
    `${type}/${status}?api_key=${apiKey}&language=${navigator.languages[0]}&page=${page}`
  );
}

export function fetchMovieVedio(type, movie_id) {
  let url = `${type}/${movie_id}/videos?api_key=${apiKey}&language=en-US`;

  return axios.get(url);
}

// https://api.themoviedb.org/3/movie/804095/videos?api_key=ea4c56d50a17f4673be5e41527930787&language=en-US