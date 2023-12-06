import React, { useState } from "react";
import UserContext from "./UserContext";

// Once you've created a context object, you need to wrap the components that
//  need access to the shared data with a Provider component.
function UserContextProvider({Children}) {
  const [User, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ User, setUser }}>
        {Children}
      </UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
