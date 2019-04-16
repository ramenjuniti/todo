import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, remove, edit, done }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <div className="Todo">
      {isEditing ? (
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
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="Todo-edit-cancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            className="Todo-done"
            onClick={done}
            checked={todo.done}
          />
          <span className="Todo-text">
            {todo.done ? <s>{todo.text}</s> : todo.text}
          </span>
          <div className="Todo-buttons">
            <button className="Todo-remove" onClick={remove}>
              Remove
            </button>
            <button className="Todo-edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
