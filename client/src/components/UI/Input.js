import React from "react";
import { Grid, TextField } from "@mui/material";

const Input = ({ id, label, type, value, onChange, width }) => {
  return (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id={id}
        type={type}
        label={label}
        name={id}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
};

export default Input;
