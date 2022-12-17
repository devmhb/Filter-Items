import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="container">
      <h2 className="title">{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </div>
  );
};

export default Movie;
