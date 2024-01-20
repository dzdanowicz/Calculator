import { createStore } from "redux";
import rootReducer from "./rootReducer";

console.log("store");

const store = createStore(rootReducer);

export default store;
