import * as React from 'react';
import './App.css';
import { eel } from "./classes/eel";

const logo = require('./logo.svg');

interface CmpProps {}

class App extends React.Component {
  constructor(props: CmpProps) {
    super(props);

    eel.set_host('ws://localhost:8888');
    eel.add(100, 100);

    // Tried With Anonymous Function, doesn't work
    // eel.expose((data: any) => {console.debug(data)}, 'hello');

    // Tried doing it the way the document says, but still gives AbstractionException
    // eel.expose(hello);
    // function hello(world: string) {
    //   console.debug(world);
    // }

    // Tried doing it the way it is in the eel.js source file
    // Which says to pass in a function, then name.
    // eel.expose(
    //   function (data: string) {
    //     console.debug(data);
    //   },
    //   'hello')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Testing Auto-Reload Feature
        </p>
      </div>
    );
  }
}

export default App;
