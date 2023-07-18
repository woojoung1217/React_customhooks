/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

const useNetWork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  console.log(navigator);
  // navigator = return true or false

  const handleChange = () => {
    if (typeof onChange === "function ") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return { status };
};
const App = () => {
  const onLine = useNetWork();
  return (
    <div>
      <h1>{onLine ? "onLine" : "offLine"}</h1>
    </div>
  );
};

export default App;
