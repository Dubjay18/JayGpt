import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import AppNavigator from "./app.navigator";
import AuthNavigator from "./Auth.navigator";

function Navigation() {
  const [isSignedin, setIsSignedin] = useState(false);

  return (
    <>{isSignedin ? <AppNavigator /> : <AuthNavigator />}</>
  );
}

export default Navigation;
