import * as React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-paper";

const AppSpeech = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}>
      <Text>Speech to text</Text>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

export default AppSpeech;
