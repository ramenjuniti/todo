import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import { Provider } from "../../store";
import TodoList from "./TodoList";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider>
      <TodoList />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
