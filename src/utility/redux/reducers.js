import auth from "./slices/auth.slice";
import theme from "./slices/themeSlice";
import { combineReducers } from "redux";

export default combineReducers({ auth, theme });
