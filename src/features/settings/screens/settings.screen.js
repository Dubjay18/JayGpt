import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { cusSignOut } from "../../../services/auth.service";
import SafeArea from "../../../utility/SafeArea";
import AppSpeech from "../components/speech.component";
import AppTheme from "../components/theme.component";

function Settings() {
  return (
    <SafeArea>
      <AppTheme />
      <AppSpeech />
      <Button onPress={cusSignOut}>signout</Button>
    </SafeArea>
  );
}

export default Settings;
