import PropTypes from "prop-types";
import React from "react";
import { Input, Label } from "reactstrap";

const ViewController = ({ view, changeView }) => {
  return (
    <div className="d-flex">
      <Label for="list-view" className="mr-4">
        <Input
          className="d-inline-bloc "
          type="radio"
          name="view"
          value="list"
          id="list-view"
          checked={view === "list"}
          onChange={changeView}
        />
        List View
      </Label>
      <Label for="table-view" className="mr-4">
        <Input
          className="d-inline-block"
          type="radio"
          name="view"
          value="table"
          id="table-view"
          checked={view === "table"}
          onChange={changeView}
        />
        Table View
      </Label>
    </div>
  );
};

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
