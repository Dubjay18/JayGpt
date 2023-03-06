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

const Settings = () => (
  <SafeArea>
    <Text>settings</Text>
    <Text onPress={cusSignOut}>signout</Text>
  </SafeArea>
);
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
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

export default AppNavigator;
