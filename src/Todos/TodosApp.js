import React, { useReducer, useEffect, useRef } from "react";

import { useEffectOnce } from "../Hooks/useEffectOnce";
import { TodosList } from "./Components/TodosList";
import { TodosCount } from "./Components/TodosCount";
import { todosReducer } from "../Redux/Reducers/TodosReducer";
import { DispatchContext } from "../Contexts/dispatchContext";
import { StateContext } from "../Contexts/stateContext";

// Context provides a means of accessing a piece of state through a provider, without having to prop-drill to desired child component

export const TodosApp = () => {
  const [state, dispatch] = useReducer(todosReducer, []);
  /*
  loads data from local storage
  passing in [] as last argumeent will result in useEffect
  only running as "componentDidMount"

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    dispatch({ type: "RESET", payload: JSON.parse(storedData) });
  }, []);

  Can also use useRef hook. useRef is typically used when you
  need to access the current value of a UI element :
  didLoad = {current}
  const didLoad = useRef(false);

  useEffect(() => {
    if (!didLoad.current) {
      const storedData = localStorage.getItem("data");
      dispatch({ type: "RESET", payload: JSON.parse(storedData) });
      didLoad.current = true;
    }
  });
*/

  // Can also use custom hook to make useEffect only run once.
  useEffectOnce(() => {
    const storedData = localStorage.getItem("data");
    dispatch({ type: "RESET", payload: JSON.parse(storedData) });
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className="App">
        <h1>Todos App</h1>
        <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add Todo</button>
        <div className="Container">
          <br />
          <StateContext.Provider value={state}>
            <TodosList list={state} />
            <TodosCount list={state} />
          </StateContext.Provider>
        </div>
      </div>
    </DispatchContext.Provider>
  );
};
