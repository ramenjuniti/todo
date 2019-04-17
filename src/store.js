import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  counter: 2,
  todos: [
    {
      id: 1,
      text: "One",
      done: false
    },
    {
      id: 2,
      text: "Two",
      done: true
    }
  ]
};

const Store = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, Provider };
