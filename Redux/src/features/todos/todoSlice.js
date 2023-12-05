// in these we will create slice using createSlice method
/*
Parameter inside createSlice method
1)name -> name is used in action type (type is String)
2)initalState ->  The initial state for the reducer
3)reducers -> An object containing Redux "case reducer" functions 
(functions intended to handle a specific action type,equivalent to a single case 
statement in a switch).

*/

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = {
  todos: [{ id: 1, text: "HelloWorld" }],
};
// const sayhello = () => {}

export const todoSlice = createSlice({
  name: "todos",
  initalState,
  reducers: {
    // addtodo :sayhello, here we can pass the reference of the function
    addtodo: (state, action) => {
      // state is curreent state
      // action jo bhi data apss ho rha h
      const todo = {
        id: nanoid(),
        text: action.payload, // payload is object
      };
      state.todos.push(todo);
      
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// steps to export  reducers
// slice is exported
// this is for dispatch
export const { addtodo, removetodo } = todoSlice.actions;
// this is for configure store
export default todoSlice.reducer;
