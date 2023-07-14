/* eslint-disable */

import { useRef, useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setvalue] = useState(initialValue);
  const onChange = (event) => {
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setvalue(event.target.value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("MR.", maxLen);

  return (
    <div className="App">
      <h1>hello</h1>

      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
