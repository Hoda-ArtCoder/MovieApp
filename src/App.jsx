// src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useLanguage } from './context/LanguageContext';

// Lazy load components
const MovieDetails = lazy(() => import("./components/MovieCard/movieDetails"));
const NavBar = lazy(() => import("./components/Header/header"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FavoriteMovies = lazy(() => import("./pages/FavoriteMovies"));
const RegisterForm = lazy(() => import("./pages/Register"));

export default function App() {
  const { language, direction } = useLanguage();

  useEffect(() => {
    // Set the document direction based on the language
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
