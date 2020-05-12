# React Todo App

React app that uses context and local storage to manage todos.

## Usage

- `yarn` install dependencies
- `yarn start` start react app

## Deployed

You can take a look at the deployed app [here]().

- Create the Context object that will contain the Context of the App, the initial value will be an empty array, and two functions addTodo and markAsDone.
- In the App.js have a state variable that will contain the list of todos.
- In the App.js add a method addTodo which receives a text as an argument, and adds a todo to the list. Each todo in the list will be an Object with the properties id:Date.now(), text: The text received in the arguments, and completed: Boolean false by default.
- In the App.js ad a method markAsDone which receives a todoId, and it sets the complete value of the todo object as true.
- Create a globalState object in the App.js render method that will have three properties todos: this.state.todos, addTodo:this.addTodo, and markAsDone:this.markAsDone.
- Wrap the entire App in the Context Provider and pass globalState as the value
