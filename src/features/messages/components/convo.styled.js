import { ScrollView, View } from "react-native";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
} from "styled-system";

const Convo = styled(ScrollView)`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

export default Convo;
