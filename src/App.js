/* eslint-disable */

import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";
import axios from "axios";
import "./App.css";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading :${loading} \n error :${error} , Data:${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};
export default App;
