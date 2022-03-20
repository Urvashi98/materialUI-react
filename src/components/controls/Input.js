import { TextField } from '@material-ui/core';
import React from 'react'

export default function Input(props) {
    const { name, value, onChangeHandler, label, variant, autocomplete} = props;
  return (
    <TextField 
    label={label}
    variant={variant}
    name={name}
    value={value}
    onChange={onChangeHandler}
    autoComplete= {autocomplete}
    />
  )
}
