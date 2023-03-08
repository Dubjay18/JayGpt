import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { connect } from "react-redux";
import AuthScreen from "../../features/Auth/screens/auth.screen";
import LoginScreen from "../../features/Auth/screens/login.screen";
import RegisterScreen from "../../features/Auth/screens/register.screen";
import SafeArea from "../../utility/SafeArea";
import theme from "../../utility/theme";

function AuthNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.green,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={AuthScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
const mapStateToProps = (state, myOwnProps) => {
  // console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};

export default connect(mapStateToProps)(AuthNavigator);
