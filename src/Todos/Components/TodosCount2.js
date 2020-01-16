import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTodos } from "../../Selectors/getTodos";
import { getFavorite } from "../../Selectors/getFavorite";

// updateFavorite action creator
const updateFavorite = (id, type) => {
  return {
    type: "UPDATE_FAVORITE",
    payload: {
      id,
      type
    }
  };
};

const todosCountStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 8,
  marginTop: 10
};

export const TodosCount2 = props => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  // example to replicate "isFavorite" usecase for NFHUD
  const { id, type } = props;
  const isFavorite = useSelector(state => getFavorite(state, id, type));
  // used to show dispatch updating sate with new favorite
  // const state = useSelector(state => state);
  // console.log(state);

  return (
    <>
      <div style={todosCountStyle}>{`COUNT: ${todos.length}`}</div>
      <div style={todosCountStyle}>{`Is Favorite?: ${isFavorite}`}</div>
      <button onClick={() => dispatch(updateFavorite(id, type))}>
        New Favorite
      </button>
    </>
  );
};
