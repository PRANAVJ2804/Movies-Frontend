import axios from "axios";

export default axios.create({
  baseURL: "https://movies-bh3z.onrender.com",
  timeout: 20000,
  headers: { "Content-type": "application/json" },
});
