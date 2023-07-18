/* eslint-disable */
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const useStyle = () => {
  const [style, setStyle] = useState(["blue", "red", "orange"]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % style.length);
    setCount((prevCount) => prevCount + 1);
    clearInterval(interval);
  }, 1000);
  return { currentStyle: style[currentIndex], count, setStyle };
};
const App = () => {
  const { currentStyle, count, setStyle } = useStyle();

  console.log("Style change count:", count);
  return (
    <div className={currentStyle}>
      <div>hello</div>
      <h1 className={currentStyle}>hello</h1>
    </div>
  );
};
export default App;
