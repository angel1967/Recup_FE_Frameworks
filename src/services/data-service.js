// Timer para la promesa de carga de tarjetas
import data from "../data/posts.json";
import axios from 'axios';

export function login(username, password) {
  return axios.post("https://three-points.herokuapp.com/api/login", { username, password }).then((response) => response.data);
}

export function getPosts() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([...data.posts]);
    }, 3000);
  });
}