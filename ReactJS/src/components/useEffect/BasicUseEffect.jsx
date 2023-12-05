import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function BasicUseEffect() {
  const [first, setfirst] = useState({});
  function x() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setfirst(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }
  useEffect(() => {
    x();
  }, []);
  console.log(first);
  return <div></div>;
}

export default BasicUseEffect;
