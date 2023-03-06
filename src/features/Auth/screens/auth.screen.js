import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Button } from "react-native-paper";
import theme from "../../../utility/theme";
import SafeArea from "../../../utility/SafeArea";
const AuthScreen = ({ navigation }) => {
  const image = {
    uri: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  return (
    <SafeArea noandroid>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={{
          flex: 1,
          justifyContent: "center",
        }}>
        <KeyboardAvoidingView
          behavior={
            Platform.OS === "ios" ? "padding" : "height"
          }
          style={{
            padding: 14,

            flex: 1,
          }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 50,
            }}>
            <Image
              style={{
                height: 60,
                width: 60,

                marginBottom: 60,
              }}
              source={require("../../../../assets/ChatGPT_Logo_PNG1.png")}
            />
          </View>

          <View style={{ marginTop: 100 }}>
            <Button
              buttonColor={theme.colors.green}
              textColor={theme.colors.white}
              onPress={() => navigation.navigate("Login")}
              style={{
                height: 50,
                marginBottom: 20,
              }}
              contentStyle={{ height: 50 }}>
              Login
            </Button>
            <Button
              buttonColor={theme.colors.green}
              textColor={theme.colors.white}
              onPress={() =>
                navigation.navigate("Register")
              }
              style={{
                height: 50,
                marginBottom: 20,
              }}
              contentStyle={{ height: 50 }}>
              Register
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeArea>
  );
};

export default AuthScreen;
