/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Box } from "@material-ui/core";
import { StyledInputLabel } from "../styles";

const Form = () => {
  const inputLabel = React.useRef(null);

  return (
    <Paper component={Container} maxWidth="xs">
      <Box pt="1.5rem">
        <TextField
          required
          fullWidth
          id="name"
          label="Nome Completo"
          type="text"
          name="name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="telephone"
          label="Telefone"
          type="text"
          name="telephone"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Endereço de e-mail"
          type="email"
          name="email"
          margin="normal"
          variant="outlined"
          autoComplete="email"
        />
        <TextField
          required
          fullWidth
          id="company_name"
          label="Nome da empresa"
          type="text"
          name="company_name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="site_url"
          label="URL do site"
          type="text"
          name="site_url"
          margin="normal"
          variant="outlined"
        />

        <FormControl variant="outlined" fullWidth margin="normal" required>
          <StyledInputLabel ref={inputLabel} htmlFor="monthly_budget">
            Verba mensal em mídia
          </StyledInputLabel>
          <Select
            native
            input={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <OutlinedInput
                fullWidth
                id="monthly_budget"
                type="text"
                name="monthly_budget"
                variant="outlined"
              />
            }
          >
            <option value="" />
            <option value={`<= R$5.000`}>{`<= R$5.000`}</option>
            <option value={`>= R$5.001 e <= R$30.000`}>
              {`>= R$5.001 e <= R$30.000`}
            </option>
            <option value={`>= R$30.001 e <= R$100.000`}>
              {`>= R$30.001 e <= R$100.000`}
            </option>
            <option value={`>= R$100.001 e <= R$500.000`}>
              {`>= R$100.001 e <= R$500.000`}
            </option>
            <option value="Não se aplica">Não se aplica</option>
          </Select>
        </FormControl>
      </Box>
      <Box mt="1.5rem" pb="1.5rem" textAlign="center">
        <Button variant="contained" color="secondary">
          Experimentar
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;
