import React, { useState } from "react";

function Basic() {
  const [count, setCount] = useState(0);
  
  return <div className="text-center">
    <button onClick={()=>setCount((prev) => prev+1)}>Count is : {count}</button>
  </div>;
}

export default Basic;
