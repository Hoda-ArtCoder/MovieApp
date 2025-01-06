import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import MovieDetails from "./components/MovieCard/movieDetails";
import NavBar from "./components/Header/header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FavoriteMovies from "./pages/FavoriteMovies"
import RegisterForm from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}