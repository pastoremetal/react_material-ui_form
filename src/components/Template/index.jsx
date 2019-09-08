import React, { type Node } from "react";
import Header from "./Header";
import { StyledLayout, StyledContainer } from "./styles";

const Template = ({ children }: { children: Node }) => (
  <StyledLayout>
    <Header />
    <StyledContainer>{children}</StyledContainer>
  </StyledLayout>
);

export default Template;
