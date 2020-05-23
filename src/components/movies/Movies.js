import React from "react";
import UserItem from "./MovieItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={movieStyle}>
        {movies.map((movie) => (
          <UserItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const movieStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Movies;
