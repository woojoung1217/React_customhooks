/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const useFullScreen = (onFulls) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();

      if (onFulls && typeof onFulls === "function") {
        onFulls(true);
      }
    }
  };
  const exit = () => {
    document.exitFullscreen();
    if (onFulls && typeof onFulls === "function") {
      onFulls(false);
    }
  };

  return { element, triggerFull, exit };
};

const App = () => {
  const onFulls = (isPull) => {
    console.log(isPull ? "full" : "not full");
  };
  const { element, triggerFull, exit } = useFullScreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exit}>exit</button>
      </div>

      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};

export default App;
