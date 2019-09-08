// @flow
import React, { Fragment, Node } from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppRouter from "./AppRouter";
import "typeface-roboto";

const AppWrapper = ({ children }: { children: Node }) => (
  <Fragment>{children}</Fragment>
);

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#14E298",
      contrastText: "#fff"
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  </ThemeProvider>
);

ReactDOM.render(<App />, global.document.getElementById("app"));
