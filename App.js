import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import Navigation from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components";
import theme from "./src/utility/theme";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";

import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./src/utility/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducer,
});
export const paperLightheme = {
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    primary: "rgb(0, 107, 91)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(120, 248, 221)",
    onPrimaryContainer: "rgb(0, 32, 26)",
    secondary: "rgb(74, 99, 93)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(205, 232, 224)",
    onSecondaryContainer: "rgb(6, 32, 27)",
    tertiary: "rgb(67, 98, 120)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(200, 230, 255)",
    onTertiaryContainer: "rgb(0, 30, 47)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(250, 253, 250)",
    onBackground: "rgb(25, 28, 27)",
    surface: "rgb(250, 253, 250)",
    onSurface: "rgb(25, 28, 27)",
    surfaceVariant: "rgb(219, 229, 224)",
    onSurfaceVariant: "rgb(63, 73, 70)",
    outline: "rgb(111, 121, 118)",
    outlineVariant: "rgb(190, 201, 197)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(46, 49, 48)",
    inverseOnSurface: "rgb(239, 241, 239)",
    inversePrimary: "rgb(89, 219, 193)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 242)",
      level2: "rgb(230, 241, 237)",
      level3: "rgb(223, 237, 233)",
      level4: "rgb(220, 236, 231)",
      level5: "rgb(215, 233, 228)",
    },
    surfaceDisabled: "rgba(25, 28, 27, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 27, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
  dark: true,
  mode: "exact",
};
export const paperDarkheme = {
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    primary: "rgb(89, 219, 193)",
    onPrimary: "rgb(0, 56, 47)",
    primaryContainer: "rgb(0, 81, 68)",
    onPrimaryContainer: "rgb(120, 248, 221)",
    secondary: "rgb(177, 204, 196)",
    onSecondary: "rgb(29, 53, 47)",
    secondaryContainer: "rgb(51, 75, 69)",
    onSecondaryContainer: "rgb(205, 232, 224)",
    tertiary: "rgb(171, 202, 228)",
    onTertiary: "rgb(17, 51, 72)",
    tertiaryContainer: "rgb(43, 74, 95)",
    onTertiaryContainer: "rgb(200, 230, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(25, 28, 27)",
    onBackground: "rgb(224, 227, 225)",
    surface: "rgb(25, 28, 27)",
    onSurface: "rgb(224, 227, 225)",
    surfaceVariant: "rgb(63, 73, 70)",
    onSurfaceVariant: "rgb(190, 201, 197)",
    outline: "rgb(137, 147, 143)",
    outlineVariant: "rgb(63, 73, 70)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(224, 227, 225)",
    inverseOnSurface: "rgb(46, 49, 48)",
    inversePrimary: "rgb(0, 107, 91)",
    elevation: {
      level0: "transparent",
      level1: "rgb(28, 38, 35)",
      level2: "rgb(30, 43, 40)",
      level3: "rgb(32, 49, 45)",
      level4: "rgb(33, 51, 47)",
      level5: "rgb(34, 55, 50)",
    },
    surfaceDisabled: "rgba(224, 227, 225, 0.12)",
    onSurfaceDisabled: "rgba(224, 227, 225, 0.38)",
    backdrop: "rgba(41, 50, 48, 0.4)",
  },
  dark: store.getState().theme.darkmode,
  mode: "exact",
};
export default function App() {
  const queryClient = new QueryClient();

  const scheme = useColorScheme();
  return (
    <>
      <Provider store={store}>
        <PaperProvider
          theme={
            scheme === "dark"
              ? paperDarkheme
              : paperLightheme
          }>
          <ThemeProvider theme={theme}>
            <RootSiblingParent>
              <NavigationContainer>
                <Navigation />
              </NavigationContainer>
            </RootSiblingParent>
          </ThemeProvider>
        </PaperProvider>
      </Provider>
    </>
  );
}
