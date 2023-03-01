import axios from "axios";

const api = axios.create({
  baseURL: "https://div-api.herokuapp.com",
});

export default api;
