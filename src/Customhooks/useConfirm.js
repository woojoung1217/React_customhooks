/* eslint-disable */

import React, { useEffect, useState } from "react";
import "../src/App.css";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => {
    console.log("deleting world ...");
  };

  const deleteAction = useConfirm("Are you sure?", deleteWorld);
  return (
    <div>
      <button onClick={deleteAction}> Delete </button>
    </div>
  );
};
export default App;
