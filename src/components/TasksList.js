import React from "react";
import TodoAppContext from "../utils/TodoAppContext";

function TasksList() {
  const globalState = React.useContext(TodoAppContext);

  return (
    <div>
      Todos List
      <ul>
        {globalState.todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => globalState.markAsDone(todo.id)}>
                done
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TasksList;
