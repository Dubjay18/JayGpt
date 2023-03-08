export const DARK_MODE = "DARK_MODE";
export const darkMode = (bool) => ({
  type: DARK_MODE,
  bool,
});
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
});
