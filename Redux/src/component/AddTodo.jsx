import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandeler = () => {
    e.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addtodo(input));
    // dispatch uses reducers to store data inside store
    setInput('');
    console.log("Successfully")

  };
  return (
    <div>
      <form onSubmit={addTodoHandeler}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default AddTodo;
