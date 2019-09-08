import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import bg from "../../Assets/bg.svg";

export const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-position: center bottom;
  background-repeat: no-repeat;
`;

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: #fff;
    border-bottom: 1px solid rgba(45, 58, 64, 0.1);
    box-shadow: none;
  }
`;

export const StyledContainer = styled(Container)`
  margin-top: 3.125rem;
`;
