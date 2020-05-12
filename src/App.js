import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoAppContext from "./utils/TodoAppContext";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
    };
  }

  componentDidMount = () => {
    let tasks = localStorage.getItem("todos");
    if (tasks) {
      this.setState({ todos: JSON.parse(tasks) });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  addTodo = (text) => {
    let newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  markAsDone = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = true;
        }
        return todo;
      }),
    });
  };

  render() {
    const globalState = {
      todos: this.state.todos,
      addTodo: this.addTodo,
      markAsDone: this.markAsDone,
    };

    return (
      <TodoAppContext.Provider value={globalState}>
        <Router>
          <Route component={Home} />
        </Router>
      </TodoAppContext.Provider>
    );
  }
}

App.contextType = TodoAppContext;

export default App;
