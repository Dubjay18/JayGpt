import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { cusSignOut } from "../../../services/auth.service";
import SafeArea from "../../../utility/SafeArea";
import theme from "../../../utility/theme";
import AppSpeech from "../components/speech.component";
import AppTheme from "../components/theme.component";

function Settings(props) {
  console.log(props);
  return (
    <SafeArea noandroid>
      <View
        style={
          props.dark_mode
            ? {
                backgroundColor: theme.colors.dark,
                color: "!#fff",
                flex: 1,
              }
            : {
                flex: 1,
              }
        }>
        <AppTheme />
        <AppSpeech dark_mode={props.dark_mode} />
        <Button onPress={cusSignOut}>signout</Button>
      </View>
    </SafeArea>
  );
}
const mapStateToProps = (state, myOwnProps) => {
  console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};
export default connect(mapStateToProps)(Settings);
