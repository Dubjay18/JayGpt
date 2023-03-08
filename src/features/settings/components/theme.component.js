import * as React from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-paper";
import { connect } from "react-redux";
import { toggleTheme } from "../../../utility/redux/slices/themeSlice";

const AppTheme = (props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  React.useEffect(() => {
    props.toggleTheme(true);
    console.log(props);
  }, [isSwitchOn]);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
      }}>
      <Text>Dark theme</Text>
      <Switch
        value={props.dark_mode}
        onValueChange={() =>
          props.toggleTheme(!props.dark_mode)
        }
      />
    </View>
  );
};
const mapStateToProps = (state, myOwnProps) => {
  console.log(state.theme.darkmode);
  return {
    dark_mode: state.theme.darkmode,
  };
};
const mapDispatchToProps = {
  // ... normally is an object full of action creators
  toggleTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTheme);
