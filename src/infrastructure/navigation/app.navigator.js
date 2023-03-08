import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MesssageScreen from "../../features/messages/screens/messages.screen";
import { Button } from "react-native-paper";
import { Text } from "react-native";
import SafeArea from "../../utility/SafeArea";
import { cusSignOut } from "../../services/auth.service";
import Settings from "../../features/settings/screens/settings.screen";
import theme from "../../utility/theme";
import { connect } from "react-redux";

const Stack = createStackNavigator();
function AppNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerStyle: {
          backgroundColor: props.dark_mode
            ? "#000"
            : "#fff",
        },
        headerTintColor: props.dark_mode ? "#fff" : "#000",
      }}
      initialRouteName='Messages'>
      <Stack.Screen
        name='Messages'
        component={MesssageScreen}
        options={({ navigation, route }) => ({
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <Button
              icon='cog'
              onPress={() =>
                navigation.navigate("Settings")
              }
            />
          ),
        })}
      />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
}
const mapStateToProps = (state, myOwnProps) => {
  // console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};

export default connect(mapStateToProps)(AppNavigator);
