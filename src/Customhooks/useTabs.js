/* eslint-disable */
import { useState } from "react";
import "./App.css";

const content = [
  { tab: "section1", content: "im section 1" },
  { tab: "section2", content: "i'm the content of the section2" },
];

const useTabs = (init, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [cindex, setcindex] = useState(init);

  return { currentItem: allTabs[cindex], itemChange: setcindex };
};

const App = () => {
  const { currentItem, itemChange } = useTabs(0, content);
  return (
    <div className="App">
      <div>
        {content.map((section, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                itemChange(index);
              }}
            >
              {section.tab}
            </button>
          );
        })}
        {currentItem.content}
      </div>
    </div>
  );
};
export default App;
