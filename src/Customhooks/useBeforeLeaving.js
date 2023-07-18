/* eslint-disable */
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";

const useBeforeLeaving = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = () => {
    console.log("leaving");
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begforLife = () => console.log("hello");
  useBeforeLeaving(begforLife);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
