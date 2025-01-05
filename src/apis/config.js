import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  posterURL: "https://image.tmdb.org/t/p/w500"
});
axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGY2MGJiODZmMjFlMTRlMmU0ZDFiZTAwNmIwYzRiOCIsIm5iZiI6MTczNTk4OTQ0My42ODIsInN1YiI6IjY3NzkxOGMzMjVlMGU5MWM1Nzc0YmZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1YjSlij8TYplasxLKMFoHdT3GyWgCiTfAD7ipaGa2Es";
    config.headers.Accept ="application/json"
    return config;
  },function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
