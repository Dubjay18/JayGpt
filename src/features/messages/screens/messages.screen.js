import React from "react";
import { Text, View } from "react-native";
import SafeArea from "../../../utility/SafeArea";
import SpeechToText from "../../SpeechToText";

import Convo from "../components/convo.styled";
import Message from "../components/message.component";

function MesssageScreen() {
  return (
    <SafeArea>
      <Convo bg='grey' flex={0.9} m={3}>
        {/* <SpeechToText /> */}
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
        <Message user />
        <Message />
      </Convo>
      {/* //{" "}
      <View>
        // <SpeechToText />
        //{" "}
      </View> */}
    </SafeArea>
  );
}

export default MesssageScreen;
