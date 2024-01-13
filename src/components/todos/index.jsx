import React, { Component } from "react";
import Controller from "../controller";
import ListView from "../listView";
import TableView from "../tableView";

class Todo extends Component {
  state = [
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
  ];

  toggleSelect = () => {};
  toggleComplete = () => {};

  render() {
    return (
      <div>
        <h1 className="display- fw-semibold text-center mb-5">Smart Todo </h1>
        <div>
          <Controller />
        </div>
        <div>
          <ListView
            todos={this.state}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
          <TableView
            todos={this.state}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
