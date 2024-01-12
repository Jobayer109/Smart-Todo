import PropTypes from "prop-types";
import React from "react";
import { ListGroup, ListItem } from "reactstrap";

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
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
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
