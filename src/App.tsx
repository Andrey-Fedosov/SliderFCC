import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImageSlider } from "./component/imageSlider/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://jsonplaceholder.typicode.com/photos"}
        limit={"6"}
      />
    </div>
  );
}

export default App;
