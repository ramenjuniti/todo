import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import { Provider } from "../../store";
import TodoList from "../TodoList";
import Todo from "./Todo";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider>
      <TodoList>
        <Todo />
      </TodoList>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
