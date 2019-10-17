import { combineReducers } from "redux";
import chatState from "./chat/reducers";

const appReducer = combineReducers({
  chatState,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
