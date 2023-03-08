import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ActivityIndicator,
  TextInput,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Button } from "react-native-paper";
import theme from "../../../utility/theme";
import { EmailAndPasswordLogin } from "../../../services/auth.service";
import {
  paperDarkheme,
  paperLightheme,
} from "../../../../App";
import { connect } from "react-redux";
const LoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    if (data) {
      EmailAndPasswordLogin(data.Email, data.password);
    }
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === "ios" ? "padding" : "height"
      }
      style={
        props.dark_mode
          ? {
              flex: 1,
              padding: 14,
              backgroundColor:
                paperDarkheme.colors.background,
            }
          : {
              flex: 1,
              padding: 14,
              backgroundColor:
                paperLightheme.colors.background,
            }
      }>
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
      <View style={{ marginBottom: 30 }}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode='outlined'
              placeholder='Email'
              textContentType='emailAddress'
              theme={
                props.dark_mode
                  ? paperDarkheme
                  : paperLightheme
              }
            />
          )}
          name='Email'
          defaultValue=''
        />
        {errors.Email && (
          <Text style={{ color: theme.colors.error }}>
            This field is required.
          </Text>
        )}
      </View>
      <View style={{ marginBottom: 100 }}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value },
          }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode='outlined'
              placeholder='Enter password'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='newPassword'
              secureTextEntry
              theme={
                props.dark_mode
                  ? paperDarkheme
                  : paperLightheme
              }
            />
          )}
          name='password'
          defaultValue=''
        />
        {errors.password && (
          <Text style={{ color: theme.colors.error }}>
            This field is required.
          </Text>
        )}
      </View>

      <View style={{ marginTop: "auto" }}>
        <Button
          buttonColor={theme.colors.green}
          textColor={theme.colors.white}
          disabled={isLoading}
          onPress={handleSubmit(onSubmit)}
          style={{
            height: 50,
          }}
          contentStyle={{ height: 50 }}>
          {isLoading ? <ActivityIndicator /> : "Submit"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = (state, myOwnProps) => {
  // console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};

export default connect(mapStateToProps)(LoginScreen);
