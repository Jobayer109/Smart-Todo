import PropTypes from "prop-types";
import React from "react";
import { Button, Input } from "reactstrap";

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
  return (
    <div className="d-flex my-2 m-auto">
      <Input
        value={term}
        placeholder="Search your task"
        onChange={(e) => handleSearch(e.target.value)}
      ></Input>
      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
