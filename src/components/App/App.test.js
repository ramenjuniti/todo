import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "react-testing-library";
import { Provider } from "../../store";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
