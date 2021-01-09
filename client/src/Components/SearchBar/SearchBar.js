import React from "react";
import "../SearchBar/searchBar.css";

const SearchBar = ({ value, name, onChange, type, placeholder }) => {
  return (
    <>
      <div className="search__container">
        <input
          className="search__input"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
