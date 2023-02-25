import { View } from "react-native";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  border,
} from "styled-system";

const MessageStyle = styled(View)`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
`;

export default MessageStyle;
