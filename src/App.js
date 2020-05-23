import React, { Fragment, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import Search from "./components/movies/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search Movies
  const searchMovies = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=${process.env.REACT_APP_THE_MOVIE_DB_API_LANGUAGE}&query=${text}`
    );
    setMovies(res.data.results);
    setLoading(false);
  };

  // Clear movies from state
  const clearMovies = () => {
    setMovies([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchMovies={searchMovies}
          clearMovies={clearMovies}
          showClear={movies.length > 0 ? true : false}
          showAlert={showAlert}
        />
        <Movies loading={loading} movies={movies} />
      </div>
    </Fragment>
  );
}

export default App;
