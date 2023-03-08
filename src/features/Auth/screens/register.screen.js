import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import theme from "../../../utility/theme";
import { EmailAndPasswordReg } from "../../../services/auth.service";
import { connect } from "react-redux";
import {
  paperDarkheme,
  paperLightheme,
} from "../../../../App";

const RegisterScreen = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      EmailAndPasswordReg(
        data.email,
        data.password,
        data.name
      );
    }
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
              keyboardType={"email-address"}
              textContentType='emailAddress'
              mode='outlined'
              placeholder='Email'
              theme={
                props.dark_mode
                  ? paperDarkheme
                  : paperLightheme
              }
            />
          )}
          name='email'
          defaultValue=''
        />
        {errors.email && (
          <Text style={{ color: theme.colors.error }}>
            This field is required.
          </Text>
        )}
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
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='newPassword'
              secureTextEntry
              mode='outlined'
              placeholder='Password'
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
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='newPassword'
              secureTextEntry
              mode='outlined'
              placeholder='Confirm Password'
              theme={
                props.dark_mode
                  ? paperDarkheme
                  : paperLightheme
              }
            />
          )}
          name='confirmpassword'
          defaultValue=''
        />
        {errors.confirmpassword && (
          <Text style={{ color: theme.colors.error }}>
            This field is required.
          </Text>
        )}
      </View>
      <View style={{ marginTop: "auto" }}>
        <Button
          buttonColor={theme.colors.green}
          textColor={theme.colors.white}
          onPress={handleSubmit(onSubmit)}>
          Submit
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

export default connect(mapStateToProps)(RegisterScreen);
