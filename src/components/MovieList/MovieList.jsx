import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import axiosInstance from "../../apis/config";
import { Box, Grid2, Rating, Container } from "@mui/material";
import "./MovieList.css";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router";

export default function ListMovies() {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("movie/popular", {
        params: {
          language: "en-US",
          page: 1,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      }),
      [];
  });

  const handleRedirectionToDetails = (id) => {
    navigate(`./movie-details/${id}`) ;
  }

  return (
    <Container maxWidth="xlg" sx={{ marginTop: 4 }}>
      <h1>Popular movies</h1>
      <Grid2 container spacing={5}>
        {movies?.map((movie) => (
          <Card key={movie.id} sx={{ width: 310 } } onClick={() => handleRedirectionToDetails(movie.id)}  >
            <CardMedia
              component="img"
              image={`${axiosInstance.defaults.posterURL}${movie.poster_path}`}
              alt="movie poster"
            />
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={movie.title}
              subheader={movie.release_date}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Rating
                name="text-feedback"
                value={movie.vote_average / 2} // Scale rating
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{`${movie.vote_average} / 10`}</Box>
            </CardActions>
            
          </Card>
        ))}
      </Grid2>
    </Container>
  );
}
