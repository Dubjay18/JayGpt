import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { Button } from "react-native-paper";
import theme from "../../../utility/theme";
const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        padding: 14,
      }}>
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
            outlineColor={theme.colors.green}
          />
        )}
        name='Email'
        defaultValue=''
      />
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
            outlineColor={theme.colors.green}
          />
        )}
        name='password'
        defaultValue=''
      />
      {errors.myInput && (
        <Text>This field is required.</Text>
      )}
      <Button
        buttonColor={theme.colors.green}
        textColor={theme.colors.white}
        onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>
      <View>
        <Text
          onPress={() => navigation.navigate("Register")}>
          Signup
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
