import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodoItem2 } from "./TodoItem2";

export const TodosList2 = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
      {todos && todos.map(item => <TodoItem2 key={item.id} {...item} />)}
    </div>
  );
};
