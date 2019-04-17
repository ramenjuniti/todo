import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank as Undone,
  MdCheckBox as Done,
  MdDone as Save,
  MdClose as Close,
  MdEdit as Edit,
  MdHighlightOff as Remove
} from "react-icons/md";
import "./Todo.css";

const Todo = ({ todo, remove, edit, done }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const iconColor = "#616161";

  const DoneCheck = props => {
    return todo.done ? <Done {...props} /> : <Undone {...props} />;
  };

  return (
    <div className="Todo">
      {isEditing ? (
        <>
          <div className="Todo-edit-input-container">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              className="Todo-edit-input"
            />
          </div>
          <div className="Todo-edit-button-container">
            <Save
              className="Todo-edit-save"
              onClick={() => {
                edit(text);
                setIsEditing(false);
              }}
            />
            <Close
              className="Todo-edit-cancel"
              color={iconColor}
              onClick={() => setIsEditing(false)}
            />
          </div>
        </>
      ) : (
        <>
          <DoneCheck className="Todo-done" onClick={done} color={iconColor} />
          <div className="Todo-text-container">
            <span className="Todo-text">
              {todo.done ? <s>{todo.text}</s> : todo.text}
            </span>
          </div>

          <div className="Todo-button-container">
            <Edit
              className="Todo-edit"
              color={iconColor}
              onClick={() => setIsEditing(true)}
            />
            <Remove
              className="Todo-remove"
              color={iconColor}
              onClick={remove}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
