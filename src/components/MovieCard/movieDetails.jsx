import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../apis/config";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  ButtonGroup,
  Button,
  Container,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./movieDetails.css";
import ProductionCompanies from "./productionCompanies"

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`, {
        params: {
          movie_id: params.id,
          language: "en-US",
        },
      })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const formattedDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (

    
    <Container maxWidth="xlg" className="movie-container">
      {movie && (
        <Card className="movie-card">
          <Box className="movie-card-media">
            <CardMedia
              component="img"
              image={`${axiosInstance.defaults.posterURL}${movie.poster_path}`}
              alt="Movie Poster"
            />
          </Box>

          <CardContent className="movie-card-content">
            <Typography id="movie-title">{movie.title}</Typography>
            <Typography className="movie-release-date">
              {formattedDate}
            </Typography>
            <Box className="movie-rating">
              <Rating
                name="text-feedback"
                value={movie.vote_average / 2} // Scale rating
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Typography className="vote-count">
                {movie.vote_count} votes
              </Typography>
            </Box>
            <ButtonGroup
              variant="text"
              aria-label="Basic button group"
              className="movie-genres"
            >
              {(movie.genres || []).map((g) => (
                <Button key={g.id}>{g.name}</Button>
              ))}
            </ButtonGroup>

            <Typography className="movie-overview">{movie.overview}</Typography>

            <Typography className="movie-duration">
              <b>Duration</b> {movie.runtime} minutes
            </Typography>
            <Typography className="movie-language">
              <b>Language</b> {movie.original_language}
            </Typography>

            <ProductionCompanies companies={movie.production_companies} />
            </CardContent>
        </Card>
      )}
    </Container>
  );
}
