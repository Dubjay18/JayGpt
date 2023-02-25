import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components";
import theme from "./src/utility/theme";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import dotenv from "dotenv";
dotenv.config();
export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
