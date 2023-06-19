import React from "react";
import BabyNamesData from "./babyNamesData.json";

const Search = (props) => {
  const setBabyNames = props.setBabyNames;
  const handelSearch = (event) => {
    setBabyNames(
      BabyNamesData.filter(
        (baby) =>
          baby.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
      )
    );
  };

  return (
    <div>
      <input
        className="search"
        id="search-id"
        type="text"
        onChange={handelSearch}
      />
    </div>
  );
};

export default Search;

// another attempt
// const setSearchText = props.setSearchText;
// setSearchText(event.target.value);
