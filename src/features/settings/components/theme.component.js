import * as React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-paper";

const AppTheme = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}>
      <Text>Dark theme</Text>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

export default AppTheme;
