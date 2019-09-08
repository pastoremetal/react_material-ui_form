import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { StyledAppBar } from "./styles";

const Header = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Typography color="primary" variant="h6" component="span">
        Your logo goes here
      </Typography>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
