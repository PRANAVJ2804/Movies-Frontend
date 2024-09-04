import axios from "axios";

export default axios.create({
  baseURL: "https://movies-4q5d.onrender.com",
  timeout: 20000,
  headers: { "Content-type": "application/json" },
});
