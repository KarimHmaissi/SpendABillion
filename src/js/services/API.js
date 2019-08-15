import axios from 'axios';

const rootUrl = 'http://localhost:4040/api/';

export function getItems(category, page) {
  return axios.get(`${rootUrl}item/?category=${category}&page=${page}`).then(result => result.data);
}
