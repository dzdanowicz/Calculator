import "./App.css";
import Display from "../features/Display/Display.js";
import Keyboard from "../features/Keyboard/Keyboard.js";
import { Provider } from "react-redux";
import store from "../store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrapper">
          <Display />
          <Keyboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
