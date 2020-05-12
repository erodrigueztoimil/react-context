import React, { Component } from "react";

import TodoAppContext from "../utils/TodoAppContext";
import TasksList from "./TasksList";

class Home extends Component {
  state = {
    todo: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEnterPress = (e) => {
    if (e.key === "Enter" && this.state.todo) {
      this.context.addTodo(this.state.todo);
      this.setState({ todo: "" });
    }
  };

  render() {
    let tasks = this.context.todos.filter((todo) => !todo.completed).length;
    return (
      <div>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEnterPress}
          placeholder="Type in your task and press enter."
          style={{ padding: "10px", fontSize: "18px", width: "500px" }}
        />
        <p>You have {tasks} uncompleted tasks.</p>

        <TasksList />
      </div>
    );
  }
}

Home.contextType = TodoAppContext;

export default Home;
