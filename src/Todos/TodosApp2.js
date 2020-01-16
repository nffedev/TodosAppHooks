import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { TodosList2 } from "./Components/TodosList2";
import { TodosCount2 } from "./Components/TodosCount2";
import { TodosReducer2 } from "../Redux/Reducers/TodosReducer2";

export const TodosApp2 = () => {
  const store = createStore(TodosReducer2);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todos App</h1>
        <div className="Container">
          <br />
          <TodosList2 />
          <TodosCount2 id={1} type={"user"} />
        </div>
      </div>
    </Provider>
  );
};
