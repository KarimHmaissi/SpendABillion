const rootUrl = 'http://localhost:4040/api/';

export function getItems(category, page) {
  return axios.get(`${rootUrl}items/`)
  .then(items => {
    return items;
  });
};
