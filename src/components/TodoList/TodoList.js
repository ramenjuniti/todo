import React, { useContext, useState } from "react";
import Todo from "../Todo";
import { Store } from "../../store";
import "./TodoList.css";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);
  const [filter, setFilter] = useState("all");

  const filtering = filter => {
    switch (filter) {
      case "undone":
        return state.todos.filter(t => !t.done);
      case "done":
        return state.todos.filter(t => t.done);
      default:
        return state.todos;
    }
  };

  return (
    <div className="TodoList">
      <div className="TodoList-select">
        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="undone">Undone</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="TodoList-todos">
        {filtering(filter).map(t => (
          <Todo
            key={t.id}
            todo={t}
            done={() => dispatch({ type: "done", id: t.id })}
            remove={() => dispatch({ type: "remove", id: t.id })}
            edit={text => dispatch({ type: "edit", id: t.id, text: text })}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
