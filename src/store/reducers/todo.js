import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types/todo";

// 1.
const initialState = {
  allIds: [],
  byIds: {},
};

// 2.
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_TODO: {
      // 4.
      const { id, content } = action.payload;

      // 5.
      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;

      let byIdsNew = { ...state.byIds };
      delete byIdsNew[id];

      return {
        ...state,

        allIds: [...state.allIds.filter((i) => i !== id)],

        byIds: {
          ...byIdsNew,
        },
      };
    }

    default:
      return state;
  }
}
