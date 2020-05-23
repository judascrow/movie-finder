import React from "react";
import PropTypes from "prop-types";

const MovieItem = ({ movie: { original_title, poster_path, id } }) => {
  return (
    <div className="card text-center">
      <img
        src={`${
          poster_path !== null
            ? process.env.REACT_APP_WEBSITE_IMAGE_LINK + "/" + poster_path
            : process.env.REACT_APP_WEBSITE_NO_IMAGE_LINK
        }`}
        alt=""
        style={{ width: "220px", height: "330px" }}
      />
      <h3>{original_title}</h3>
      <div>
        <a
          href={`${process.env.REACT_APP_WEBSITE}/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-sm my-1"
        >
          More
        </a>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
