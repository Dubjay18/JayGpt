import React from "react";
import { View, Text, Image } from "react-native";
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
        gap: 5,
        padding: 14,
      }}>
      <View
        style={{
          alignItems: "center",
        }}>
        {/* <Image
          style={{
            height: 30,
            width: 60,
            marginTop: 200,
            marginBottom: 60,
          }}
          source={require("../../../../assets/ChatGPT_Logo_PNG1.png")}
        /> */}
      </View>
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
            style={{ marginBottom: 30 }}
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
            style={{ marginBottom: 100 }}
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
        onPress={handleSubmit(onSubmit)}
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
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
