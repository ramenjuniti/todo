import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import { Provider } from "../../store";
import AddTodo from "./AddTodo";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider>
      <AddTodo />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
