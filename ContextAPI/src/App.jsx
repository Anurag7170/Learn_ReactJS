import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContext from "./context/UserContext";
// import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [User, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ User, setUser }}>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
    // <h1>React with Chai and share is important</h1>
  );
}

export default App;
/*
step 1) create a folder context and create context
*/
