import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utility/firebase";
import {
  loginFunc,
  signoutFunc,
} from "../../utility/redux/slices/auth.slice";
import AppNavigator from "./app.navigator";
import AuthNavigator from "./Auth.navigator";

function Navigation() {
  const [isSignedin, setIsSignedin] = useState(false);
  const userStore = useSelector(
    (state) => state.auth.value
  );
  const dispatch = useDispatch();
  function serialize(obj) {
    let serialized = "";

    // Loop through each property of the object
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        // If the property value is an object, serialize it recursively
        if (typeof obj[prop] === "object") {
          serialized += `${prop}=${serialize(obj[prop])}&`;
        }
        // Otherwise, append the property key and value to the serialized string
        else {
          serialized += `${prop}=${obj[prop]}&`;
        }
      }
    }

    // Remove the trailing ampersand from the serialized string
    serialized = serialized.slice(0, -1);

    return serialized;
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(loginFunc(serialize(user)));
      } else {
        // User is signed out
        // ...
        dispatch(signoutFunc());
      }
    });
  }, []);

  return (
    <>{userStore ? <AppNavigator /> : <AuthNavigator />}</>
  );
}

export default Navigation;
