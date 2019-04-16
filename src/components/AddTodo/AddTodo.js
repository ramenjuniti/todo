import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ add }) => {
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
          add(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
