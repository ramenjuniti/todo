import React, { useContext } from "react";
import Todo from "./Todo";
import { Store } from "./store";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <div>
      {state.todos.map(t => (
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
