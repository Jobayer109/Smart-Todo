import PropTypes from "prop-types";
import React from "react";
import { Button, Input, Table } from "reactstrap";

const RawItem = ({ todo, toggleSelect, toggleComplete }) => {
  const { id, text, time, description, isComplete, isSelect } = todo;
  return (
    <tr>
      <td>
        <Input
          type="checkbox"
          id={id}
          checked={isSelect}
          onChange={() => toggleSelect(id)}
        />
      </td>

      <td>
        {text} <br />
        {/* {description} */}
      </td>
      <td>{time.toDateString()}</td>
      <td>
        <Button
          className="ml-auto"
          onClick={() => toggleComplete(id)}
          color={isComplete ? "danger" : "success"}
        >
          {isComplete ? "Completed" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

RawItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead className="fs-5">
        <tr>
          <th>#</th>
          <th>Task name</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="fs-5 fw-normal">
        {todos.map((todo) => (
          <RawItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
