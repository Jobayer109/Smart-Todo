import PropTypes from "prop-types";
import React from "react";
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  const { id, text, time, description, isComplete, isSelect } = todo;
  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <Input
          className="me-5"
          type="checkbox"
          id={id}
          checked={isSelect}
          onChange={() => toggleSelect(id)}
        />
        <div>
          <h5>{text}</h5>
          {/* <p>{description}</p> */}
          <span className="fs-6 fst-italic">{time.toDateString()}</span>
        </div>
      </div>

      <Button
        className=""
        onClick={() => toggleComplete(id)}
        color={isComplete ? "danger" : "success"}
      >
        {isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup className="text-center m-auto">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </ListGroup>
  );
};

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
