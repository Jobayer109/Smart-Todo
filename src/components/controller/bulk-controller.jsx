import PropTypes from "prop-types";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button
        className="fs-xs text-center"
        color="danger"
        onClick={() => clearSelected}
      >
        Clear selected
      </Button>
      <Button
        className="fs- text-center"
        color="danger"
        onClick={() => clearCompleted}
      >
        Clear Completed
      </Button>
      <Button className="fs- text-center" color="danger" onClick={() => reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};

BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
