import React, { useContext, useState } from "react";
import { Store } from "../../store";
import "./AddTodo.css";

const AddTodo = () => {
  const { dispatch } = useContext(Store);
  const [text, setText] = useState("");

  return (
    <div className="AddTodo">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="AddTodo-input"
      />
      <button
        className="AddTodo-button"
        disabled={!text}
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
