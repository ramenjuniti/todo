import React from "react";
import TodoList from "../TodoList";
import AddTodo from "../AddTodo";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="App-title">Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
