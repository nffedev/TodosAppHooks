const initialState = [];
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    case "DELETE_TODO": {
      return state.filter(item => item.id !== action.payload);
    }

    case "COMPLETED": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    case "UPDATE_TODO": {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, text: action.payload.value };
        }
        return item;
      });
    }
    case "RESET": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
