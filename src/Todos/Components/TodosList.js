import React from "react";
import { TodoItem } from "./TodoItem";
import { StateContext } from "../../Contexts/stateContext";
// USING PROPS
// export const TodosList = ({ list }) => {
//   return list.map(item => <TodoItem key={item.id} {...item} />);
// };

// USING CONTEXT
export const TodosList = () => {
  return (
    <StateContext.Consumer>
      {state => state.map(item => <TodoItem key={item.id} {...item} />)}
    </StateContext.Consumer>
  );
};
