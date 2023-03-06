import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;

  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const IosOnlyContainer = styled(SafeAreaView)`
  flex: 1;
`;

function SafeArea({ children, noandroid }) {
  return (
    <>
      {noandroid ? (
        <IosOnlyContainer>{children}</IosOnlyContainer>
      ) : (
        <Container>{children}</Container>
      )}
    </>
  );
}

export default SafeArea;
