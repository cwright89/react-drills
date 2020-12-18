import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://blaahhg.files.wordpress.com/2016/07/brand-new-band.jpg?w=640"} />
      </div>
    );
  }
}

export default App;