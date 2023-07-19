/* eslint-disable */

import React from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        }
      });
    } else {
      return;
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("can I enter your git hub?", {
    body: "I Love It",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>notification</button>
    </div>
  );
};
export default App;
