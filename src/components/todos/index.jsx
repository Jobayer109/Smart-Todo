import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import shortid from "shortid";
import Controller from "../controller";
import CreateTodoForm from "../create-todo-form";
import ListView from "../listView";
import TableView from "../tableView";

class Todo extends Component {
  state = {
    todos: [
      {
        id: shortid.generate(),
        text: "Wake up",
        description: "Early to bed and early rise",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: shortid.generate(),
        text: "Open school door",
        description: "I love go to school",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],

    isOpenForm: false,
    searchTerm: "",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  handleSearch = () => {};

  toggleForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
    console.log(todo);
  };

  render() {
    return (
      <div>
        <h1 className="fw-normal text-center mb-5">Smart Todo</h1>
        <div>
          <Controller
            term={this.state.searchTerm}
            handleSearch={this.handleSearch}
            toggleForm={this.toggleForm}
          />
        </div>
        <div>
          <ListView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
          <TableView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>

        <Modal toggle={this.toggleForm} isOpen={this.state.isOpenForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create Your New Todo
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todo;
