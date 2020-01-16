import React, { useContext } from "react";
import { DispatchContext } from "../../Contexts/dispatchContext";
const todoStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 8
};
export const TodoItem = ({ id, completed, text }) => {
  /*
    alternative way of consuming context. 
    instead of wrapping with Context.Consumer,
    use useContext with imported Consumer, then
    directly use value from Provider.
  */
  // const dispatch = useContext(DispatchContext);
  return (
    <DispatchContext.Consumer>
      {dispatch => (
        <div style={todoStyle} id={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch({ type: "COMPLETED", payload: id })}
          />
          <input
            type="text"
            defaultValue={text}
            onChange={e =>
              dispatch({
                type: "UPDATE_TODO",
                payload: { id: id, value: e.target.value }
              })
            }
          />
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
          >
            Delete
          </button>
        </div>
      )}
    </DispatchContext.Consumer>
  );
};
