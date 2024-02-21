import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImageSlider } from "./component/imageSlider/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://via.placeholder.com/600/"}
        limit={"6"}
        page={"1"}
      />
    </div>
  );
}

export default App;
