import React, { Fragment } from "react";
import MovieSearch from "../components/MovieSearch/movieSearch";
import ListMovies from "../components/MovieList/MovieList";

export default function Home() {
  return (
    <Fragment>
      <MovieSearch />
      <ListMovies />
    </Fragment>
  );
}
