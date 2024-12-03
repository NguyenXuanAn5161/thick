export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const fetchTodos = (todos) => ({
  type: FETCH_TODOS,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = (id, updatedTask) => ({
  type: "EDIT_TODO",
  payload: { id, task: updatedTask },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
