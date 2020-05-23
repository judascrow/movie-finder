import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const { searchMovies, clearMovies, showClear, showAlert } = props;
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("กรุณากรอกข้อมูลสำหรับการค้นหา", "light");
    } else {
      searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Movies..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="ค้นหา" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearMovies}>
          ล้าง
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
