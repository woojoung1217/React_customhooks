// it's not work at react -v
/* eslint-disable */
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef } from "react";

const useFadeIn = () => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transiton = "opacity 5s";
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const FadeInh1 = useFadeIn();
  return (
    <div>
      <h1 {...FadeInh1}>hello</h1>
    </div>
  );
};
export default App;
