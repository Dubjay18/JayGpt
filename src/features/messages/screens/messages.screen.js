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
import openai from "react-openai-api";
import Constants from "expo-constants";
import { OPENAI_API_KEY } from "@env";
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
  // const configuration = new Configuration({
  //   apiKey: "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",
  // });
  // openai.configure({
  //   apiKey:
  //     "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",
  // });
  // const { isLoading, isError, refetch, data } = useQuery(
  //   "botResponse",
  //   async () => {
  //     const response = await axios.post(
  //       "https://api.openai.com/v1/chat/completions",{
  //       model: "gpt-3.5-turbo",
  //  messages: [{ role: "user", content: "Hello world" }],
  //       {
  //         headers: {
  //           Authorization: `Bearer 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`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     return response.data.choices[0].text;
  //   },
  //   {
  //     enabled: false,
  //     onSuccess: (data) => {
  //       setMessages((messages) => [
  //         ...messages,
  //         { text: data, sender: "bot" },
  //       ]);
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //     },
  //   }
  // );

  const openaiQuery = async (input) => {
    //   // try {
    //   //   const completion = await openai.createChatCompletion({
    //   //     model: "text-davinci-002",
    //   //     prompt: inputValue,
    //   //     maxTokens: 50,
    //   //     temperature: 0.5,
    //   //     n: 1,
    //   //     stop: "\n",
    //   //   });
    //   //   setMessages((messages) => [
    //   //     ...messages,
    //   //     {
    //   //       text: completion.data.choices[0].text,
    //   //       sender: "bot",
    //   //     },
    //   //   ]);
    //   // } catch (error) {
    //   //   console.log(error);
    // }
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
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      { text: inputValue, sender: "user" },
    ]);
    setInputValue("");
    openaiQuery(inputValue);
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
