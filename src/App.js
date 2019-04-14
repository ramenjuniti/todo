import React, { useContext } from "react";
import { Store } from "./store";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () => {
  const { dispatch } = useContext(Store);
  return (
    <>
      <AddTodo add={text => dispatch({ type: "add", text: text })} />
      <TodoList />
    </>
  );
};
export default App;
