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


// https://api.themoviedb.org/3/movie/latest?api_key=frfreferfref&language=en-US
