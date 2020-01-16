import React from "react";
import { StateContext } from "../../Contexts/stateContext";

const todosCountStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 8
};

// USING PROPS
// export const TodosCount = ({ list }) => {
//   return <div style={todosCountStyle}>{`COUNT: ${list.length}`}</div>;
// };

// USING CONTEXT
export const TodosCount = () => {
  return (
    <StateContext.Consumer>
      {state => <div style={todosCountStyle}>{`COUNT: ${state.length}`}</div>}
    </StateContext.Consumer>
  );
};
