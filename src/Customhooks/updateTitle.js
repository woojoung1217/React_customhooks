/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";

const UseTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("h1");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

const App = () => {
  const Update = UseTitle("Loading...");
  setTimeout(() => {
    Update("home");
  }, 2000);
  return (
    <div>
      <h1>HI</h1>
    </div>
  );
};
export default App;
