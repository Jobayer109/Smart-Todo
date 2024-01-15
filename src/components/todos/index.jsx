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
      {
        id: shortid.generate(),
        text: "Last door",
        description: "I love go to school",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],

    isOpenForm: false,
    searchTerm: "",
    view: "list",
    filter: "all",
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

  handleSearch = (value) => {
    this.setState({ searchTerm: value });
  };

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
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  changeView = (event) => {
    this.setState({
      view: event.target.value,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };

  reset = () => {
    this.setState({
      isOpenForm: false,
      searchTerm: "",
      view: "list",
      filter: "all",
    });
  };

  performSearch = () => {
    return this.state.todos.filter((t) =>
      t.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="fw-normal text-center mb-5">Smart Todo</h1>
        <div>
          <Controller
            term={this.state.searchTerm}
            view={this.state.view}
            handleSearch={this.handleSearch}
            toggleForm={this.toggleForm}
            handleFilter={this.handleFilter}
            changeView={this.changeView}
            clearSelected={this.clearSelected}
            clearCompleted={this.clearCompleted}
            reset={this.reset}
          />
        </div>
        <div>{this.getView()}</div>

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
