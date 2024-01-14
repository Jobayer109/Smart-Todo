import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);

    e.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Task name</Label>
          <Input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Task name here"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="textarea"
            name="description"
            value={this.state.description}
            placeholder="Write a short description here"
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
