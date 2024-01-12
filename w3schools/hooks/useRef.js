import React, { useEffect, useRef, useState } from "react";
import { ReactDOM } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return <>
        <input
        type="text"
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
         />
         <h1>Read count: {count.current}</h1>
  </>
}

//useRef is used to pass a mutable value that does not cause re-render 
