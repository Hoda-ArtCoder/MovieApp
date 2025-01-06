import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../store/slice/favouriteSlice";
import axiosInstance from "../../apis/config";
import { Box, Grid2, Rating, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";
import { useLanguage } from '../../context/LanguageContext'; // Assuming you're using LanguageContext

export default function ListMovies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites || []);
  const { language } = useLanguage();

  useEffect(() => {
    // Fetch popular movies with dynamic language parameter
    axiosInstance
      .get("movie/popular", {
        params: {
          language: language || "en-US", 
          page: 1,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [language]); // Trigger re-fetch when language changes

  const handleRedirectionToDetails = (id) => {
    navigate(`./movie-details/${id}`);
  };

  const handleFavoriteToggle = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id); // Check if the movie is already in favorites

    if (isFavorite) {
      dispatch(removeFromFavorite(movie.id)); // Remove from favorites if it's already in the list
    } else {
      dispatch(addToFavorite(movie)); // Add to favorites if it's not in the list
    }
  };

  return (
    <Container maxWidth="xlg" sx={{ marginTop: 4 }}>
      <h1>Popular Movies</h1>
      <Grid2 container spacing={5}>
        {movies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id); 

          return (
            <Card key={movie.id} sx={{ width: 310 }}>
              <CardMedia
                component="img"
                image={`${axiosInstance.defaults.posterURL}${movie.poster_path}`}
                alt="movie poster"
                onClick={() => handleRedirectionToDetails(movie.id)} 
              />
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleFavoriteToggle(movie); 
                  }}
                >
                  <FavoriteIcon color={isFavorite ? "primary" : "default"} /> {/* Change icon color */}
                </IconButton>
                <Rating
                  name="text-feedback"
                  value={movie.vote_average / 2} 
                  readOnly
                  precision={0.1}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{`${movie.vote_average} / 10`}</Box>
              </CardActions>
            </Card>
          );
        })}
      </Grid2>
    </Container>
  );
}
