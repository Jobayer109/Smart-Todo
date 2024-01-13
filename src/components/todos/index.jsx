import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Controller from "../controller";
import CreateTodoForm from "../create-todo-form";
import ListView from "../listView";
import TableView from "../tableView";

class Todo extends Component {
  state = {
    todos: [
      {
        id: "bfdjdjf",
        text: "Wake up",
        description: "Early to bed and early rise",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "bfdsffjdjf",
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

  toggleSelect = () => {};

  toggleComplete = () => {};

  handleSearch = () => {};

  toggleForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    });
  };

  createTodo = () => {};

  render() {
    return (
      <div>
        <h1 className="fw-normal text-center mb-5">Smart Todo </h1>
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
