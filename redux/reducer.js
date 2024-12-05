import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    user: null,
  },
  reducers: {
    fetchTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    // editTodo: (state, action) => {
    //   const { id, task } = action.payload;
    //   const todo = state.todos.find((todo) => todo.id === id);
    //   if (todo) todo.task = task;
    // },
    editTodo: (state, action) => {
      console.log("Payload received:", action.payload); // Kiểm tra payload
      const { id, task } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
      } else {
        console.error(`Todo with id ${id} not found`);
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  loginSuccess,
  logout,
} = todoSlice.actions;

export default todoSlice.reducer;
