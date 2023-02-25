import React from "react";
import { Text } from "react-native";
import MessageStyle from "./message.styled";

const Message = ({ sender, text }) => {
  return (
    <>
      {sender === "user" && (
        <MessageStyle
          bg='green'
          ml='auto'
          mt={3}
          p={2}
          borderRadius={8}
          color='#fff'>
          <Text style={{ color: "#fff" }}>{text}</Text>
        </MessageStyle>
      )}
      {sender === "bot" && (
        <MessageStyle
          bg='white'
          mt={3}
          p={2}
          borderRadius={8}>
          <Text>{text}</Text>
        </MessageStyle>
      )}
    </>
  );
};

export default Message;
