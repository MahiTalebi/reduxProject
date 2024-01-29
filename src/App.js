import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { seriesNameSlice } from "./redux/seriesNameSlice";

function App() {
  const seriesName = useSelector((state) => state.seriesName.val.favorite);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)} type="text"></input>
      <br />
      <button
        onClick={() => dispatch(seriesNameSlice.actions.setSeriesName([value]))}
      >
        add your favorite series
      </button>
      {seriesName.map((nam) => (
        <h1>{nam}</h1>
      ))}
    </div>
  );
}

export default App;
