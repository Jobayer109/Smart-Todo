import PropTypes from "prop-types";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => clearSelected}>Clear selected</Button>
      <Button onClick={() => clearCompleted}>Clear Completed</Button>
      <Button onClick={() => reset}>Reset</Button>
    </ButtonGroup>
  );
};

BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
