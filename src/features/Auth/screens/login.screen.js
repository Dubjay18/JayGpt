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
const LoginScreen = ({ navigation }) => {
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
              placeholder='Email'
              placeholderTextColor={"grey"}
              textContentType='emailAddress'
              outlineColor={theme.colors.green}
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
              placeholderTextColor={"grey"}
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='newPassword'
              secureTextEntry
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

export default LoginScreen;
