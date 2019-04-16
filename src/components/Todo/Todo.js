import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, remove, edit, done }) => {
  const [mode, setMode] = useState("list");
  const [text, setText] = useState(todo.text);

  return (
    <div className="Todo">
      {mode === "list" ? (
        <>
          <input
            type="checkbox"
            className="Todo-done"
            onClick={done}
            checked={todo.done}
          />
          {/* {todo.done ? "Undone" : "Done"}
          </button> */}
          <span className="Todo-text">
            {todo.done ? <s>{todo.text}</s> : todo.text}
          </span>
          <div className="Todo-buttons">
            <button className="Todo-remove" onClick={remove}>
              Remove
            </button>
            <button className="Todo-edit" onClick={() => setMode("edit")}>
              Edit
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className="Todo-edit-input"
          />
          <button
            className="Todo-edit-save"
            onClick={() => {
              edit(text);
              setMode("list");
            }}
          >
            Save
          </button>
          <button className="Todo-edit-cancel" onClick={() => setMode("list")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
