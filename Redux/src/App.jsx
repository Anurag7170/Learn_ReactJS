import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;

/*
GUIDE FOR REDUX TOOLKIT
What is Redux?
Redux is a state management library that allows you to 
manage the state of your JavaScript applications more efficiently and predictably.

React Redux: Simplifies connecting your React components to the Redux store.
Advantage
1)improve data flow
2)data centralization
3)elimainte prop drilling

step 1 -> create a store
The Store -> The Redux store is like a giant container that holds all the data for 
your application.
a)steps to create store 
configureStore ->
The standard method for creating a Redux store. It uses the low-level Redux core 
createStore method internally, but wraps that to provide good defaults 
to the store setup for a better development experience

step 2 -> Create a Redux State Slice
The main idea here is Slice will produce an action that we will use for 
dispatch and a reducer that we will use in configureStore.
a) step to create 
1)create a folder inside src name->feature
2)then create file according to the features
imp -> visit todoSlice.js page for more

*/
