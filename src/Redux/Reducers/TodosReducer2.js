const initialState = {
  favorites: { user_1: true },
  todos: []
};
export const TodosReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: "",
            completed: false
          }
        ]
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload)]
      };
    }

    case "COMPLETED": {
      return {
        ...state,
        todos: [
          ...state.todos.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                completed: !item.completed
              };
            }
            return item;
          })
        ]
      };
    }
    case "UPDATE_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, text: action.payload.value };
            }
            return item;
          })
        ]
      };
    }
    case "UPDATE_FAVORITE": {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [`${action.payload.type}_${action.payload.id}`]: true
        }
      };
    }
    case "RESET": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
