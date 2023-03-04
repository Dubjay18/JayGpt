import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  TextInput,
} from "react-native-paper";
import {
  chatApi,
  useGetBotMessageQuery,
} from "../../../utility/redux/api";
import SafeArea from "../../../utility/SafeArea";
import theme from "../../../utility/theme";
import SpeechToText from "../../SpeechToText";
import { useMutation } from "@reduxjs/toolkit/query";
import Convo from "../components/convo.styled";
import Message from "../components/message.component";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import openai from "react-openai-api";
import Constants from "expo-constants";
import { OPENAI_API_KEY } from "@env";
import {
  InputContainerStyle,
  TextInputStyle,
} from "../components/message.styled";
function MesssageScreen() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [queryClient, setQueryClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setQueryClient(new QueryClient());
  }, []);

  const openaiQuery = async (input) => {
    try {
      await axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.choices[0].message.content);
          setIsLoading(false);
          setMessages((messages) => [
            ...messages,
            {
              text: res.data.choices[0].message.content,
              sender: "bot",
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessages((messages) => [
      ...messages,
      { text: inputValue, sender: "user" },
    ]);
    setInputValue("");
    openaiQuery(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e);
  };

  return (
    <SafeArea>
      <Convo bg='grey' flex={0.9} m={3}>
        {/* <SpeechToText /> */}
        {messages?.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            text={message.text}
          />
        ))}
        {isLoading && <ActivityIndicator />}
      </Convo>
      {/* //{" "}
      <View>
        // <SpeechToText />
        //{" "}
      </View> */}
      <InputContainerStyle p={2}>
        {/* <Controller
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
          name='message'
          defaultValue=''
        />
        {errors.message && (
          <Text>This field is required.</Text>
        )} */}
        <TextInputStyle
          type='text'
          placeholder='Type a message'
          value={inputValue}
          onChangeText={handleInputChange}
          mode='outlined'
          outlineColor={theme.colors.green}
          mb={2}
        />
        <Button
          buttonColor={theme.colors.green}
          textColor={theme.colors.white}
          onPress={handleInputSubmit}
          disabled={isLoading}>
          Submit
        </Button>
      </InputContainerStyle>
    </SafeArea>
  );
}

export default MesssageScreen;
