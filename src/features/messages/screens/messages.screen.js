import React from "react";
import { Text, View } from "react-native";
import SafeArea from "../../../utility/SafeArea";
import SpeechToText from "../../SpeechToText";

import Convo from "../components/convo.styled";

function MesssageScreen() {
  return (
    <SafeArea>
      <Convo bg='grey' flex={0.9} m={3}>
        <SpeechToText />
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
