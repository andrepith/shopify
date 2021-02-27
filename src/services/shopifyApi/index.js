import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

export const shopifyApi = {
  get: () =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => console.warn(err)),
};
