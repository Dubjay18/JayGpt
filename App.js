import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

import { Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./src/utility/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducer,
});

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootSiblingParent>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </RootSiblingParent>
        </ThemeProvider>
      </Provider>
    </>
  );
}
