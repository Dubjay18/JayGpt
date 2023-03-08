import React from "react";
import { Text } from "react-native";
import { MessageStyle } from "./message.styled";

const Message = ({ sender, text, dark_mode }) => {
  return (
    <>
      {sender === "user" && (
        <MessageStyle
          bg={dark_mode ? "#597a72" : "green"}
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
          bg={dark_mode ? "#000" : "white"}
          mt={3}
          p={2}
          borderRadius={8}>
          <Text
            style={
              dark_mode
                ? { color: "#fff" }
                : { color: "#000" }
            }>
            {text}
          </Text>
        </MessageStyle>
      )}
    </>
  );
};

export default Message;
