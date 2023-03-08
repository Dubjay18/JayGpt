import {
  DARK_MODE,
  UPDATE_USERNAME,
} from "../actions/theme";
import { combineReducers } from "redux";
// const themeMode = (themeMode = { bool: false }, action) => {
// //   switch (action.type) {
// //     case DARK_MODE:
// //       return !action.bool;
// //     default:
// //       return action.bool;
// //   }
// // };
const user = (user = { username: "" }, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { username: action.username };
    default:
      return user;
  }
};
export default combineReducers({ user });
