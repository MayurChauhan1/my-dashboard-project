import axios from "axios";

const API = axios.create({ baseURL: "https://newsapi.org/v2" });

export const fetchNews = (params) =>
  API.get("/top-headlines", { params });
