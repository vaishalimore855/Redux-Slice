
import { legacy_createStore } from "redux"
import rootReducer from "./reducers/index";

//const store = legacy_createStore(rootReducer)

const store = legacy_createStore(rootReducer)

export default store; 