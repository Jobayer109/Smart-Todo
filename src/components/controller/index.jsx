import React from "react";
import SearchPanel from "./search-panel";

const Controller = ({ term, handleSearch, toggleForm }) => {
  return (
    <div>
      <SearchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      />
    </div>
  );
};

export default Controller;
