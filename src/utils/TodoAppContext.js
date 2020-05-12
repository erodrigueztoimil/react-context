import React from "react";

const TodoAppContext = React.createContext({
  todos: [],
  addTodo: () => {},
  markAsDone: () => {},
});

export default TodoAppContext;
