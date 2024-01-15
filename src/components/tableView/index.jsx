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
      <td className="fst-italic">{time.toDateString()}</td>
      <td>
        <Button
          className=" w-50 m-auto"
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
    <Table className="text-center me-2">
      <thead>
        <tr>
          <th>#</th>
          <th>Task name</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RawItem
            className=""
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
