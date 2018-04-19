import axios from "axios";

const http = axios.create({
  baseURL: "https://reactjsteachingproj.herokuapp.com/",
  timeout: 7000
});

export default http;
