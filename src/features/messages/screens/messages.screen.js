import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
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

function MesssageScreen() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [queryClient, setQueryClient] = useState(null);

  useEffect(() => {
    setQueryClient(new QueryClient());
  }, []);
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { isLoading, isError, refetch, data } = useQuery(
    "botResponse",
    async () => {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: inputValue,
          max_tokens: 50,
          temperature: 0.5,
          n: 1,
          stop: "\n",
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.choices[0].text;
    },
    {
      enabled: false,
      onSuccess: (data) => {
        setMessages((messages) => [
          ...messages,
          { text: data, sender: "bot" },
        ]);
      },
    }
  );

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      { text: inputValue, sender: "user" },
    ]);
    console.log(inputValue);
    setInputValue("");
    if (inputValue) {
      refetch();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.nativeEvent.text);
  };
  const onSubmit = (data) => {
    console.log(data);
    setMessages((messages) => [
      ...messages,
      { text: data.message, sender: "user" },
    ]);
    queryClient.invalidateQueries("botResponse");
  };
  return (
    <SafeArea>
      <Convo bg='grey' flex={0.9} m={3}>
        {/* <SpeechToText /> */}
        {messages &&
          messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              text={message.text}
            />
          ))}
      </Convo>
      {/* //{" "}
      <View>
        // <SpeechToText />
        //{" "}
      </View> */}
      <View>
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
        <TextInput
          type='text'
          placeholder='Type a message'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button
          buttonColor={theme.colors.green}
          textColor={theme.colors.white}
          onPress={handleInputSubmit}>
          Submit
        </Button>
      </View>
    </SafeArea>
  );
}

export default MesssageScreen;
