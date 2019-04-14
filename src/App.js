import React, { useContext } from "react";
import { Store } from "./store";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./App.css";

const App = () => {
  const { dispatch } = useContext(Store);
  return (
    <div className="App">
      <AddTodo add={text => dispatch({ type: "add", text: text })} />
      <TodoList />
    </div>
  );
};

export default App;
