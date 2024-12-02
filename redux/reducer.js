import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actions";

const initialState = {
  todos: [],
  user: null, // Quản lý trạng thái người dùng
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default todoReducer;
