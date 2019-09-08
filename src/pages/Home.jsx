import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Template from "../components/Template";
import { StyledSubtitle } from "./styles";
import Form from "../components/Home/Form";

const Home = () => (
  <Template>
    <Typography component="h1" align="center" variant="h5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
    <StyledSubtitle component="p" align="center" variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      consectetur dolor at libero volutpat, ultricies laoreet sapien efficitur.
    </StyledSubtitle>
    <Box mt="2.1875rem" maxWidth="md">
      <Form />
    </Box>
  </Template>
);

export default Home;
