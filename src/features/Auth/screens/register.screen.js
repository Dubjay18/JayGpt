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

const RegisterScreen = ({ navigation }) => {
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
      style={{
        padding: 14,
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
              placeholder='Name'
              placeholderTextColor={"grey"}
              outlineColor={theme.colors.green}
            />
          )}
          name='name'
          defaultValue=''
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
              placeholderTextColor={"grey"}
              outlineColor={theme.colors.green}
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
              placeholder='Password'
              placeholderTextColor={"grey"}
              outlineColor={theme.colors.green}
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
          onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
        <View>
          <Text
            onPress={() => navigation.navigate("Login")}>
            Login
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
