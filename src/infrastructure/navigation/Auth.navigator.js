import React from "react";
import LoginScreen from "../../features/Auth/login.screen";
import SafeArea from "../../utility/SafeArea";

function AuthNavigator() {
  return (
    <SafeArea>
      <LoginScreen />
    </SafeArea>
  );
}

export default AuthNavigator;
