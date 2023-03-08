import * as React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-paper";
import theme from "../../../utility/theme";

const AppSpeech = (props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}>
      <Text
        style={
          props.dark_mode && {
            color: theme.colors.white,
          }
        }>
        Speech to text
      </Text>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

export default AppSpeech;
