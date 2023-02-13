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