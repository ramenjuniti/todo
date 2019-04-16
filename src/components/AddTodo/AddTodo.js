import React, { useContext, useState } from "react";
import { Store } from "../../store";
import "./AddTodo.css";

const AddTodo = () => {
  const { dispatch } = useContext(Store);
  const [text, setText] = useState("");

  return (
    <div className="AddTodo">
      <input
        data-testid="AddTodoInput"
        value={text}
        onChange={e => setText(e.target.value)}
        className="AddTodo-input"
      />
      <button
        data-testid="AddTodo-button"
        className="AddTodo-button"
        onClick={() => {
          dispatch({ type: "add", text: text });
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
