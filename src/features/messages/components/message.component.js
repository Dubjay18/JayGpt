import React from "react";
import { Text } from "react-native";
import MessageStyle from "./message.styled";

const Message = ({ user }) => {
  return (
    <>
      {user ? (
        <MessageStyle
          bg='green'
          ml='auto'
          mt={3}
          p={2}
          borderRadius={8}
          color='#fff'>
          <Text style={{ color: "#fff" }}>Message</Text>
        </MessageStyle>
      ) : (
        <MessageStyle
          bg='white'
          mt={3}
          p={2}
          borderRadius={8}>
          <Text>
            poiuytresdfghjklkjhgcvjkjgcvbn,.,nbvcvbnm,..bvcvbnm,./nbvccvbnml;lvtrdswxtytchjkm
          </Text>
        </MessageStyle>
      )}
    </>
  );
};

export default Message;
