import React, { useContext, useState } from "react";
import Todo from "./Todo";
import { Store } from "./store";
import "./TodoList.css";

const filtering = (todos, filter) => {
  switch (filter) {
    case "undone":
      return todos.filter(t => !t.done);
    case "done":
      return todos.filter(t => t.done);
    default:
      return todos;
  }
};

const TodoList = () => {
  const { state, dispatch } = useContext(Store);
  const [filter, setFilter] = useState("all");

  return (
    <div className="TodoList">
      <select id="filter-select" onChange={e => setFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="undone">Undone</option>
        <option value="done">Done</option>
      </select>
      {filtering(state.todos, filter).map(t => (
        <Todo
          key={t.id}
          todo={t}
          done={() => dispatch({ type: "done", id: t.id })}
          remove={() => dispatch({ type: "remove", id: t.id })}
          edit={text => dispatch({ type: "edit", id: t.id, text: text })}
        />
      ))}
    </div>
  );
};

export default TodoList;
