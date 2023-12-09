import "./App.css";
import Display from "../features/Display/Display.js";
import Keyboard from "../features/Keyboard/Keyboard.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
