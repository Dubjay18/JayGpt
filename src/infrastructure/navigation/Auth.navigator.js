import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../features/Auth/screens/login.screen";
import RegisterScreen from "../../features/Auth/screens/register.screen";
import SafeArea from "../../utility/SafeArea";
import theme from "../../utility/theme";

function AuthNavigator() {
  const Stack = createStackNavigator();
  return (
    <SafeArea>
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
        initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </SafeArea>
  );
}

export default AuthNavigator;
