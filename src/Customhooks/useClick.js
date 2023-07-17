/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import "./App.css";

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
    const element = ref.current;
    if (element) {
      // 'click' is keyword
      element.addEventListener("click", onClick);
    }
    // ComponentWillUnmount()
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return ref.current;
};

const App = () => {
  const sayHello = () => {
    console.log("say hello");
  };
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>HI</h1>
    </div>
  );
};
export default App;
