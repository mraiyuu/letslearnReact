import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

//useEffect hook with  a timer
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I have reached {count} times</h1>
}
