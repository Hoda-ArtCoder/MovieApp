import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid2, Rating, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";
import { removeFromFavorite } from "../store/slice/favouriteSlice";
import axiosInstance from '../apis/config';

export default function FavoritesMovies() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites || []); // Get favorites from Redux store

  const handleRedirectionToDetails = (id) => {
    navigate(`./movie-details/${id}`);
  };

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorite(movieId)); // Remove movie from favorites
  };

  return (
    <Container maxWidth="xlg" sx={{ marginTop: 4 }}>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet. Start adding some!</p>
      ) : (
        <Grid2 container spacing={5}>
          {favorites.map((movie) => (
            <Card key={movie.id} sx={{ width: 310 }}>
              <CardMedia
                component="img"
                image={`${axiosInstance.defaults.posterURL}${movie.poster_path}`}
                alt="movie poster"
                onClick={() => handleRedirectionToDetails(movie.id)}
              />
              <CardActions disableSpacing>
                <IconButton
                  aria-label="remove from favorites"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFromFavorites(movie.id);
                  }}
                >
                  <FavoriteIcon color="primary" />
                </IconButton>
                <Rating
                  name="text-feedback"
                  value={movie.vote_average / 2} // Scale rating
                  readOnly
                  precision={0.1}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{`${movie.vote_average} / 10`}</Box>
              </CardActions>
            </Card>
          ))}
        </Grid2>
      )}
    </Container>
  );
}
