import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "First Message",
      complete: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo:(id, todo) => {},
  removeTodo:(id) =>{},
  toggleComplete: (id) =>{} 
});

//Custom hook
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
