import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlice";
const store =  configureStore({
    reducer: {
      todos: todosReducer,
      // state.todos comes from this attribute name
    },
  })

  export default store
/*
store always needs acknowlegdement of reducers
*/
