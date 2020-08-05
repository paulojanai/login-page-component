import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

// api.interceptors.request.use(async (config) => {
//   await AsyncStorage.getItem("@ListApp:userToken").then((res) => {
//     if (res !== null) {
//       config.headers.Authorization = `Bearer ${res}`;
//     }
//   });
//   return config;
// });

export default api;
