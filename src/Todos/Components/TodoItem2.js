import React from "react";
import { useDispatch } from "react-redux";

const todoStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 8,
  marginTop: 10
};
export const TodoItem2 = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  return (
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
      <button onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}>
        Delete
      </button>
    </div>
  );
};
