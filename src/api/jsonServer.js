import axios from "axios";

// NB: Run DB (npm run db) and Ngrok (npm run tunnel) in seperate jsonServer project
// NB: Remember to update URL after each ngrok restart
export default axios.create({
  baseURL: "http://2f36bc5fe344.ngrok.io",
});
