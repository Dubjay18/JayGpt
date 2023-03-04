import { View } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  border,
} from "styled-system";

export const MessageStyle = styled(View)`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
`;
export const InputContainerStyle = styled(View)`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
`;

export const TextInputStyle = styled(TextInput)`
  ${space}
  ${layout}
${color}
${flexbox}
${border}
`;
