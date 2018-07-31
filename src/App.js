import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Text extends Component {
  // said to add props.....
  constructor(props) {
    super(props);
  }
  render() {
    return <p style={{ color: this.props.color }}> {this.props.value}</p>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Text color="red" value="Travis" />
      </div>
    );
  }
}

export default App;
