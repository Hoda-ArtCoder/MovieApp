import { TextField } from "@mui/material";
import React from "react";
import "./movieSearch.css";
export default function MovieSearch() {
  return (

    <section className="movie-search">
      <h1>Welcome to our movie App</h1>
      <h2>Search for your favorite movie</h2>
      <TextField className="search-text-field"
        fullWidth
        label="Search here"
        variant="filled"
        id="fullWidth"
      />
    </section>
  );
}
