import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todo from "@module/todo";

const reducers = combineReducers({
  todo,
  form: formReducer,
});

export default reducers;
