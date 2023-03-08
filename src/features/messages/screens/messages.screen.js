import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Drawer,
  TextInput,
} from "react-native-paper";

import SafeArea from "../../../utility/SafeArea";
import theme from "../../../utility/theme";
import SpeechToText from "../../SpeechToText";

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
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../../utility/firebase";
import { connect } from "react-redux";

const MyComponent = () => {
  const [active, setActive] = React.useState("");

  return (
    <Drawer.Section title='Some title'>
      <Drawer.Item
        label='First Item'
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label='Second Item'
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
  );
};

function MesssageScreen(props) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [queryClient, setQueryClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState("");

  async function getMessages() {
    setMessages([]);
    const q = query(
      collection(
        db,
        "chats",
        "messages",
        "jejeniyi7@gmail.com"
      )
    );
    // const docRef = doc(
    //   db,
    //   "chats",
    //   "messages",
    //   "jejeniyi7@gmail.com"
    // );
    try {
      //   const docSnap = await getDoc(docRef);

      //   if (docSnap.exists()) {
      //     console.log("Document data:", docSnap.data());
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setMessages((messages) => [
          {
            text: doc.data().content,
            sender: doc.data().sender,
          },
          ...messages,
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log("fgnn");
    getMessages();
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
        .then(async (res) => {
          console.log(res.data.choices[0].message.content);
          setIsLoading(false);
          setMessages((messages) => [
            ...messages,
            {
              text: res.data.choices[0].message.content,
              sender: "bot",
            },
          ]);
          await addDoc(
            collection(
              db,
              "chats",
              "messages",
              "jejeniyi7@gmail.com"
            ),
            {
              content: res.data.choices[0].message.content,
              sender: "bot",
            }
          );
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessages((messages) => [
      ...messages,
      { text: inputValue, sender: "user" },
    ]);
    await addDoc(
      collection(
        db,
        "chats",
        "messages",
        "jejeniyi7@gmail.com"
      ),
      {
        content: inputValue,
        sender: "user",
      }
    );
    setInputValue("");
    openaiQuery(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e);
  };

  return (
    <SafeArea noandroid>
      <View
        style={
          props.dark_mode
            ? {
                backgroundColor: theme.colors.dark,
                flex: 1,
              }
            : {
                flex: 1,
              }
        }>
        <Convo
          bg={props.dark_mode ? "#212121" : "grey"}
          flex={0.9}
          m={3}
          p={1}>
          {/* <SpeechToText /> */}
          {messages?.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              text={message.text}
              dark_mode={props.dark_mode}
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
          {props.dark_mode ? (
            <TextInputStyle
              type='text'
              placeholder='Type a message'
              value={inputValue}
              onChangeText={handleInputChange}
              mode='outlined'
              outlineColor={theme.colors.green}
              mb={2}
              contentStyle={{
                backgroundColor: theme.colors.dark,
                borderRadius: 4,
                margin: 0.2,
              }}
              textColor={"#fff"}
              placeholderTextColor={"#c5c6c6"}
            />
          ) : (
            <TextInputStyle
              type='text'
              placeholder='Type a message'
              value={inputValue}
              onChangeText={handleInputChange}
              mode='outlined'
              outlineColor={theme.colors.green}
              mb={2}
            />
          )}

          <Button
            buttonColor={theme.colors.green}
            textColor={theme.colors.white}
            onPress={handleInputSubmit}
            disabled={isLoading}>
            Submit
          </Button>
        </InputContainerStyle>
      </View>
    </SafeArea>
  );
}
const mapStateToProps = (state, myOwnProps) => {
  // console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};

export default connect(mapStateToProps)(MesssageScreen);
